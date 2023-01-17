import React from "react"
import { globale } from "../Layout"
import { useContext } from "react"
import { apiReq } from "../apiReq"
const Body = ()=>{
    const {state} = useContext(globale)
    return(
        <>
            <div className="text-xl">
                {console.log(apiReq(state))}
            </div>  
        </>
    )
}

export default Body