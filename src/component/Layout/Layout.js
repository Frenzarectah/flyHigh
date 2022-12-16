import React, { createContext } from "react"
import Header from "./Header/Header"
import Body from "./Body/Body"
import { useReducer } from "react"
/**
 * the main renderer of the app
 */
const globale = createContext()

const initState = {
    name:"",
    departure:"",
    arrival:"",
    depart_date:"",
    arrive_date:""
}
const flightReducer = (state,action) =>{
    switch(action.type){
    case "CHANGE_NAME":
        console.log("changing name...")
        return{...state,name: state.name="NOME CAMBIATO"}    
    case "CHANGE_DEPART":
        console.log("changing depart airport")
        return{...state,departure: state.departure="MALPENSA"}
    default:
        console.log("no action")
        return{...state,nome: state.name="DEFAULT"}

    }
}



const Layout = ()=>{
    const [state,dispatch] = useReducer(flightReducer,initState)
    return(
        <globale.Provider value={state}>
            <div className="w-100 h-screen m-[10px]">
                <button onClick={()=>dispatch({type:"CHANGE_NAME"})}>CAMBIANOME</button>
                {state.name}
                <Header name={state.name} />
                <Body  name={state.name}/>
            </div>
        </globale.Provider>
    )
}

export default Layout