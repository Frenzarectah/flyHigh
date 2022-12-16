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
                <button onClick={()=>dispatch({type:"CHANGE_NAME"})}>CAMBIANOME</button>
                {state.name}
                <Header name={state.name} dispatch={dispatch} />
                <Body name={state.name}/>
            </div>
        </globale.Provider>
    )
}

export default Layout