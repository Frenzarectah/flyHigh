import React from "react"
import { globale } from "../Layout"
import { useContext } from "react"
import ApiRenderer from "../ApiRenderer"

const Body = ()=>{
    const {state} = useContext(globale)
    return(
        <>
            <div className="text-xl">
                {state.submitting===true && <ApiRenderer props={state}/>}
            </div>  
        </>
    )
}

export default Body