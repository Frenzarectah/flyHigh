import React from "react"
import Reduce from "../Header/Reduce"

const Body = (props)=>{
    return(
        <>
            {props.name}
            <Reduce/>
        </>
    )
}

export default Body