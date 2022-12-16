import React, { createContext } from "react"
import { useReducer } from "react"

export const contestoReducer = createContext()
const initState = {
    count:1,
    name:"ciolammoocc"
}

const reducerTry = (state,action)=>{
    switch(action.type){
    case "ADDING":
        console.log("add one to counter")
        return {...state,
            count:state.count+1}
    case "REMOVING":
        console.log("add one to counter")
        return{...state,
            count: state.count-1}
    default:
        console.log("doing nothing")
        return{count: ""}
    }
}
const useReduce = ()=>{
    const [state,dispatch] = useReducer(reducerTry,initState)
    return(
        <>
            <contestoReducer.Provider value={state}>
                <button onClick={() => dispatch({type: "ADDING"})}>ADD ONE</button>
                Count: {state.count}
                Name: {state.name}
                <button onClick={() => dispatch({type: "REMOVING"})}>DEL ONE</button>
            </contestoReducer.Provider>
        </>
    )
}
export default useReduce