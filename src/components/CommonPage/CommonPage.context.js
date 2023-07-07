import React, { createContext, useContext, useState } from 'react';

export const CommonPageContext = createContext();

export const CommonPageProvider = ({ children }) => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLohInOpen, setIsLogInOpen] = useState(false);

  return (
    <CommonPageContext.Provider
      value={{
        isRegistrationOpen,
        setIsRegistrationOpen,
        isLohInOpen,
        setIsLogInOpen,
      }}
    >
      {children}
    </CommonPageContext.Provider>
  );
};

export const useCommonPageContext = () => useContext(CommonPageContext);
