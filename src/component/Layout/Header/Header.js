import React from "react"
import Form from "./Form"

const Header = (props) => {
    return(
        <header className="w-full h-96 flex justify-center items-center bg-header bg-no-repeat bg-cover border-1 border-black">
            <div style={{"background":"rgba(39, 245, 238, 0.82)"}} className="w-1/2 h-1/2 bg-[#dcdcdc] rounded">
                <Form/>
            </div>
            {props.name.passenger}    
        </header>
    )
}

export default Header