import React from "react"

const ApiRenderer = (props)=>{
    return(
        <h1>{props.arrive}</h1>
    )
}

export default ApiRenderer


/*
export const apiReq = (APIData)=>{
    fetch(`https://airlabs.co/api/v9/schedules?dep_iata=${APIData["departure"]}&arr_iata=${APIData["arrive"]}&api_key=b4137d54-e61a-46d8-967a-33ecc5836d83`)
        .then((response) => response.json())
        .then((data) =>{ 
            console.log(data.response[0])
            return data.response[0]
        })
} */