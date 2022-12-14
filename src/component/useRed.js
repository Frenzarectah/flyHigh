import React from "react"
import { useReducer } from "react"

const types = {
    ADD: "adding",
    REMOVE: "remove"
}
const initState = "stato"

const reducer = (state, action) =>{
    switch(action.type){
    case types.ADD: {return("buongiorno")}
    case types.REMOVE:{ return("addio")}
    default:{ return("default")}
    }
}





const useRed = () =>{
    const [state,dispatch] = useReducer(reducer,initState)

    return(
        <div>MIMMI</div>
    )
}

export default useRed
