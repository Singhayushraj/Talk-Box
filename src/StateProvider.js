import React, { createContext, useContext, useReducer } from "react";

export const StatContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StatContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StatContext.Provider>
);

export const useStateValue = () => useContext(StatContext);
