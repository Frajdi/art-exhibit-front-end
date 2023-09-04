import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"; // Import Leaflet Routing Machine CSS
import "leaflet-routing-machine"; // Import Leaflet Routing Machine
import locationIcon from "../../../locationIcon.png";
import axios from "axios";

const LocationPicker = ({ eventData, setEventData }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null); // Store the map instance
  const routingControl = useRef(null); // Store the routing control instance
  const markerRef = useRef(null); // Store the marker instance
  const [location, onSelectLocation] = useState(null);

  async function reverseGeocode(lat, lng) {
    // Ensure lat and lng are converted to numbers
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);

    if (isNaN(latitude) || isNaN(longitude)) {
      console.error("Invalid latitude or longitude values.");
      return null;
    }

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );

      const addressComponents = response.data.address;
      const city = addressComponents.city || addressComponents.town;
      const country = addressComponents.country;

      const formattedResult = [city, addressComponents.road]
        .filter(Boolean)
        .join(", ");

      return formattedResult;
    } catch (error) {
      console.error("Error reverse geocoding:", error);
      return null;
    }
  }

  useEffect(() => {

    if (markerRef.current) {
      // If a marker already exists, remove it from the map
      markerRef.current.removeFrom(mapInstance.current);
    }

    if (location) {
      // Remove the default marker icon
      mapInstance.current.removeLayer(location.latLng);

      // Create a transparent shadow icon

      // Create a custom marker icon with the transparent shadow
      // const customIcon = L.icon({
      //   iconUrl: locationIcon, // Use the custom marker image
      //   iconSize: [42, 42], // Set the size of the marker icon
      //   iconAnchor: [25, 45], // Set the anchor point
      //   shadowUrl: "", // Set an empty string for the shadow URL
      // });

      // const marker = L.marker(location.latLng, { icon: customIcon }).addTo(
      //   mapInstance.current
      // );
      const marker = L.marker(location.latLng).addTo(
        mapInstance.current
      );
      markerRef.current = marker;

      // Set the search result to the human-readable address
      setEventData((prev) => {return {...prev , address: location.address}});
    }
  }, [location]);

  useEffect(() => {
    if (!mapInstance.current && mapRef.current) {
      // Create the map only if it doesn't already exist
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );

      routingControl.current = L.Routing.control({
        waypoints: [], // Initialize with empty waypoints
        routeWhileDragging: true,
        show: false, // Hide the waypoint sidebar selector
      }).addTo(map);

      map.on("click", async (e) => {
        const { lat, lng } = e.latlng;
        const address = await reverseGeocode(lat, lng);
        onSelectLocation({ latLng: [lat, lng], address });

        // Set up the routing control with waypoints
        routingControl.current.setWaypoints([
          L.latLng(lat, lng),
          // Add more waypoints if needed
        ]);
      });

      // Store the map instance to prevent re-initialization
      mapInstance.current = map;
    }
  }, []);

  return (
    <div>
      <div ref={mapRef} style={{ height: "400px" }}></div>
      {eventData.address && (
        <div>
          <h2>Selected Location:</h2>
          <p>{eventData.address}</p>
        </div>
      )}
    </div>
  );
};

export default LocationPicker;
