import { useContext, createContext } from "react";

const initialState = {
  user: undefined,

}

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  <AppContext.Provider value={initialState}>
    {children}
  </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)