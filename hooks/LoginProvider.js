// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useState} from 'react';

const LoggedIn = createContext();
const LoginProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState('');
  //   AsyncStorage.getItem('TOKEN').then(data => setIsLoggedIn(data));
  return <LoggedIn.Provider value={{isLoggedIn}}>{children}</LoggedIn.Provider>;
};

export const useLoggedIn = () => useContext(LoggedIn);

export default LoginProvider;
