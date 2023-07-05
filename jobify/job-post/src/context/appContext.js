import { useContext, createContext } from "react";

const initialState = {
  user: "undefined",

}

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  return (<AppContext.Provider value={initialState}>
    {children}
  </AppContext.Provider>)
}

export const useAppContext = () => useContext(AppContext)