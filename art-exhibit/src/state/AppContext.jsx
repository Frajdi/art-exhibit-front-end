import React, { createContext, useContext, useState } from "react";

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


  return (
    <AppContext.Provider
      value={{
        profilePicture,
        username,
        authToken,
        authDialogOpen,
        isLogIn,
        setProfilePicture,
        setUsername,
        setAuthToken,
        setAuthDialogOpen,
        setIsLogIn
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
