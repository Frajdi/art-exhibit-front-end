import React, { createContext, useContext, useEffect, useState } from "react";

// Create the CartContext
const AppContext = createContext();

// Create a provider component for the AppContext
const withContext = (Component) => (props) => {
  //User Data
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [isLogIn, setIsLogIn] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [authLoading, setAuthLoading] = useState(null);

  useEffect(() => {
    console.log({authError})
  },[authError])


  return (
    <AppContext.Provider
      value={{
        profilePicture,
        username,
        authToken,
        isLogIn,
        authError,
        authLoading,
        setProfilePicture,
        setUsername,
        setAuthToken,
        setIsLogIn,
        setAuthError,
        setAuthLoading
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
