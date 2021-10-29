import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// Definir cómo luce o qué información tendré aquí
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial del contexto
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Indicar qué expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  setFavoriteIcon: (name: string) => void;
  setUsername: (name: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado de la aplicación
export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: 'signIn' });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  const setFavoriteIcon = (name: string) => {
    dispatch({ type: 'setFavoriteIcon', payload: name });
  };

  const setUsername = (name: string) => {
    dispatch({ type: 'setUsername', payload: name });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logout,
        setFavoriteIcon,
        setUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
