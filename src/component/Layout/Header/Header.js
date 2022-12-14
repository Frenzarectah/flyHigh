import React, { useState } from "react"
import Form from "./Form"

const Header = () => {
    const [data,setData] =useState({})
    const returnData = (dati)=>{
        setData(dati)
    }
    return(
        <header className="w-full h-96 flex justify-center items-center bg-header bg-no-repeat bg-cover border-1 border-black">
            <div style={{"background":"rgba(39, 245, 238, 0.82)"}} className="w-1/2 h-1/2 bg-[#dcdcdc] rounded">
                <Form handlerAPI={()=>returnData()}/>
                {data.flight_iata}
            </div>
        </header>
    )
}

export default Header