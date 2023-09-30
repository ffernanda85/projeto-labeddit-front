import { createContext } from "react";

export const GlobalContext = createContext()

export function GlobalState({ children }) {
    
    
    const context = {}

    return (
        <GlobalContext.Provider value={context}>
            {children}
        </GlobalContext.Provider>
    )
}