import React,{createContext, useContext, useReducer} from "react";

//Prepares the dataLayer (React context API)
export const StateContext=createContext();

//Wrap out app and provide the Data dataLayer
export const StateProvider= ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
  {children}
  </StateContext.Provider>
);

//Pull information from the data dataLayer
export const useStateValue = () => useContext(StateContext);
