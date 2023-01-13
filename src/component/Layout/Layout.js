import React, { createContext } from "react"
import Header from "./Header/Header"
import Body from "./Body/Body"
import { useReducer } from "react"
import { flightReducer,initState } from "./Header/Reduce"
/**
 * the main renderer of the app
 */
export const globale = createContext()

const Layout = ()=>{
    const [state,dispatch] = useReducer(flightReducer,initState)
    return(
        <globale.Provider value={{state,dispatch}}>
            <div className="w-100 h-screen m-[10px]">
                <Header name={state} disp={dispatch} />
                <Body name={state} disp={dispatch}/>
            </div>
        </globale.Provider>
    )
}

export default Layout