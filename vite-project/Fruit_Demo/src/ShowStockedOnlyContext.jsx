import { createContext } from "react"; 
import { createContext, useReducer } from "react";

export const ShowStockedOnlyContext = createContext(null); 
export function showStockedOnlyContextProvider(){
    const [value, showContextOnlyDispatch ] = useReducer(showContextOnlyReducer, false)

    return(
        <ShowStockedOnlyContext.Provider value={{value, dispatchEvent}}
        {children}
        </ShowStockedOnlyContext.Provider></ShowStockedOnlyContext.Provider>
    )
}


function showStockedOnlyReducer(value, event)

