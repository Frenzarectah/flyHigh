// https://airlabs.co/api/v9/schedules?dep_iata=BGY&arr_iata=BRI&api_key=b4137d54-e61a-46d8-967a-33ecc5836d83
import React, { useContext } from "react"
import logo from '../../../asset/logo_opacity0.png'
//import { apiReq } from "../apiReq"
import { globale } from "../Layout"

const  Form = (props)=>{
    const {state,dispatch} = useContext(globale)
    const submit = (e)=>{
        e.preventDefault()
        console.log(state)
        //apiReq(state)
    }
    return(
        <>
            <form className="flex flex-col justify-center items-center h-full md:h-[75%]" onSubmit={submit}>
                <img className="absolute top-2 right-2" alt="main logo" src={logo}/>
                <div>Dove vuoi andare?{state.arrive}</div>
                <div>
                    <div className="flex flex-col justify-center items-center md:flex-row">
                        <select placeholder="Partenza" 
                            className="w-[75%] m-1" 
                            type="text" 
                            name="departure" 
                            onChange={(e)=>dispatch({
                                type:"CHANGE_DEPART",
                                field:e.target.name, 
                                value: e.target.value})}>
                            <option value="BGY">Milano Bergamo</option>
                            <option value="BRI">Bari Palese</option>
                        </select>
                        <select placeholder="Arrivo"
                            className="w-[75%] m-1" 
                            type="text" 
                            name="arrive"
                            onChange={(e)=>dispatch({
                                type:"CHANGE_ARRIVE",
                                field: e.target.name,
                                value: e.target.value})}>
                            <option value="BGY">Milano Bergamo</option>
                            <option value="BRI">Bari Palese</option>                            
                        </select>
                        <select placeholder="Passeggeri" 
                            className="w-[75%] m-1"
                            name="passenger"
                            onChange={(e)=>dispatch({
                                type:"CHANGE_PASSENGER", 
                                field: e.target.name,
                                value: e.target.value})}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="justify-center items-center flex flex-col md:flex-row">
                        <label htmlFor="andata">andata</label>
                        <input type="date"
                            id="andata"
                            name="depart_date"
                            className="w-[75%] md:w-[30%] m-1" 
                            onChange={(e)=>dispatch({
                                type:"CHANGE_DEP_DATA", 
                                field: e.target.name,
                                value: e.target.value})}/>
                        <label htmlFor="ritorno">ritorno</label>
                        <input type="date"
                            id="ritorno"
                            name="arrive_date"
                            className="w-[75%] md:w-[30%] m-1" 
                            onChange={(e)=>dispatch({
                                type:"CHANGE_ARRIV_DATA", 
                                field: e.target.name,
                                value: e.target.value})}/>
                    </div>
                </div>        
                <button className="w-20 h-7 bg-[#008dd5] radius rounded text-white" type="submit">Let's Fly!</button>
            </form>
        </>    
        
    )
}

export default Form
