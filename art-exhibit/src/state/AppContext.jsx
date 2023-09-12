import React, { createContext, useContext, useEffect, useState } from "react";

// Create the CartContext
const AppContext = createContext();

// Create a provider component for the AppContext
const withContext = (Component) => (props) => {
  // User Data
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState(null);
  const [category, setCategory] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [isLogIn, setIsLogIn] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [authLoading, setAuthLoading] = useState(null);


  useEffect(() => {
    const profilePicture = localStorage.getItem("profilePicture")
    const username = localStorage.getItem("username")
    const category = localStorage.getItem("category")
    const authToken = localStorage.getItem("authToken")

    if(profilePicture !== 'null' && username !== 'null' && category !== 'null' && authToken !== 'null'){
      setProfilePicture(profilePicture)
      setUsername(username)
      setCategory(category)
      setAuthToken(authToken)
    }
  },[])

  // useEffect to save data to localStorage when they change
  useEffect(() => {
    localStorage.setItem("profilePicture", profilePicture);
  }, [profilePicture]);

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  useEffect(() => {
    localStorage.setItem("category", category);
  }, [category]);

  useEffect(() => {
    localStorage.setItem("authToken", authToken);
  }, [authToken]);

  const logOut = () => {
    setProfilePicture(null)
    setUsername(null)
    setCategory(null)
    setAuthToken(null)
    setAuthError(null),
    setAuthLoading(null)
  }

  return (
    <AppContext.Provider
      value={{
        profilePicture,
        username,
        authToken,
        isLogIn,
        authError,
        authLoading,
        category,
        setProfilePicture,
        setUsername,
        setCategory,
        setAuthToken,
        setIsLogIn,
        setAuthError,
        setAuthLoading,
        logOut
      }}
    >
      <Component {...props} />
    </AppContext.Provider>
  );
};

const useArtContext = () => {
  const data = useContext(AppContext);
  return { ...data };
};

export { withContext, useArtContext };
