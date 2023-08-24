import React, { createContext, useContext, useEffect, useState } from "react";

// Create the CartContext
const AppContext = createContext();

// Create a provider component for the AppContext
const withContext = (Component) => (props) => {
  //User Data
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    console.log({authError})
  },[authError])


  return (
    <AppContext.Provider
      value={{
        profilePicture,
        username,
        authToken,
        authDialogOpen,
        isLogIn,
        authError,
        setProfilePicture,
        setUsername,
        setAuthToken,
        setAuthDialogOpen,
        setIsLogIn,
        setAuthError
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
