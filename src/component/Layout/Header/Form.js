import React, { useState } from "react"

const  Form = ()=>{
    const [data,setData] = useState({
        departure:"partenza",
        arrive:"arriva"})
    
    const submit = (e)=>{
        e.preventDefault()
        console.log(data.departure,data.arrive)
    }
    return(
        <>
            <form onSubmit={submit}>
                <div>Dove vuoi andare?</div>
                <input type="text" name="arrive" onChange={(e)=>setData({arrive: e.target.value})}/>
                <input type="text" name="departure" onChange={(e)=>setData({departure: e.target.value})}/>
                <button type="submit">SUBMIT</button>
            </form>
            
        </>
    )
}

export default Form