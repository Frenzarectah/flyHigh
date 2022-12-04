import React, { useState } from "react"
import logo from '../../../asset/logo_opacity0.png'
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
                <img className="absolute top-2 right-2" alt="main logo" src={logo}/>
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
                    <select placeholder="Passeggeri" 
                        className="w-[75%] m-1"
                        value={data.passengers}
                        name="passenger"
                        onChange={(e)=>setData({...data, passengers: e.target.value})}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>        
                <button className="w-fit h-fit bg-[#ff0000] radius rounded text-white" type="submit">SUBMIT</button>
            </form>
            
        </>
    )
}

export default Form