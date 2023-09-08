import { useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import ImageContainer from "./components/ImageContainer";
import SubTaskContent from "./SubTaskContent";
import useGetAllEvents from "../../../../commands/getAllEvents";
import {motion} from 'framer-motion'

const SubtaskSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(3);
  const [events, setEvents] = useState(null);
  const { data, error, isLoading, getEvents } = useGetAllEvents();

  useEffect(() => {
    getEvents(0, 5);
  }, []);

  useEffect(() => {
    if (data) {
      setEvents(data);
    }
  }, [data]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    events !== null && (
      <motion.div
        style={{ width: "100%" }}
        initial={{
        opacity: 0,
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      }}
      animate={{
        opacity: 1,
        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
        transition: {duration: 1}
      }}
      >
        <Stack marginTop={5} alignItems="center" height="65vh" width={"100%"}>
          <Stack
            direction="row"
            height={"373px"}
            width={"100%"}
            alignItems="flex-end"
          >
            {events.map((item, index) => (
              <ImageContainer
                key={item.id}
                width={`${100 / events.length}%`}
                index={index + 1}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              >
                <img
                  src={`data:image/png;base64,${item.photo}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "drop-shadow(1rem 1rem 1rem rgba(0, 0, 0, 1))",
                  }}
                />
                {hoveredIndex === index + 1 && (
                  <SubTaskContent
                    title={item.name}
                    content={item.description}
                    date={formatDate(item.time)}
                    createdBy={item.address}
                  />
                )}
              </ImageContainer>
            ))}
          </Stack>
        </Stack>
      </motion.div>
    )
  );
};

export default SubtaskSlider;
