import React, { createContext, useContext, useReducer } from "react";
//import statements ^^

//Prepares the datalayer
export const StateContext = createContext();

//wrap our app and provide data layer to each compoenet in our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull info from the data layer
export const useStateValue = () => useContext(StateContext);
