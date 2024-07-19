import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [nama, setNama] = useState('');
  const [zodiac, setZodiac] = useState('');

  return (
    <GlobalStateContext.Provider value={{ nama, setNama, zodiac, setZodiac }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};