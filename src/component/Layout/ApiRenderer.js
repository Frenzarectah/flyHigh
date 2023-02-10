import React, { useEffect, useState } from "react"

const ApiRenderer = ({props})=>{
    const {departure,arrive} = props
    const [response,setResponse] = useState({})
    useEffect(()=>{
        fetch(`https://airlabs.co/api/v9/schedules?dep_iata=${departure}&arr_iata=${arrive}&api_key=b4137d54-e61a-46d8-967a-33ecc5836d83`)
            .then((response) => response.json())
            .then((data)=> setResponse(data.response[0]))
    },[departure,arrive,props])
    return(
        <h1>{response.flight_iata}</h1>
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