import React, { useState } from "react"

const  Form = ()=>{
    const [data,setData] = useState({
        departure:"partenza",
        arrive:"arriva",
        passengers:"1"})
    
    const submit = (e)=>{
        e.preventDefault()
        console.log(data.departure,data.arrive,data.passengers)
    }
    return(
        <>
            <form className="flex flex-row justify-between" onSubmit={submit}>
                <div>Dove vuoi andare?</div>
                <input type="text" name="arrive" onChange={(e)=>setData({...data, departure: e.target.value})}/>
                <input type="text" name="departure" onChange={(e)=>setData({...data, arrive: e.target.value})}/>
                <input type="text" name="passenger" onChange={(e)=>setData({...data,passenger: e.target.value})}/>
                <button type="submit">SUBMIT</button>
            </form>
            
        </>
    )
}

export default Form