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
            <form className="flex flex-col justify-center items-center h-[75%]" onSubmit={submit}>
                <div>Dove vuoi andare?</div>
                <div className="flex flex-col justify-center items-center md:flex-row">
                    <input placeholder="Partenza" 
                        className="w-[75%] m-1" 
                        type="text" 
                        name="departure" 
                        onChange={(e)=>setData({...data, departure: e.target.value})}/>
                    <input placeholder="Arrivo"
                        className="w-[75%] m-1" 
                        type="text" 
                        name="arrive"
                        onChange={(e)=>setData({...data, arrive: e.target.value})}/>
                    <input placeholder="Passeggeri" 
                        className="w-[75%] m-1" 
                        type="text" 
                        name="passenger" 
                        onChange={(e)=>setData({...data,passenger: e.target.value})}/>
                </div>        
                <button type="submit">SUBMIT</button>
            </form>
            
        </>
    )
}

export default Form