import React from "react"
import Header from "./Header/Header"
import Body from "./Body/Body"
/**
 * the main renderer of the app
 */

const Layout = ()=>{
    return(
        <div className="w-100 h-screen m-[10px]">
            <Header />
            <Body />
        </div>
    )
}

export default Layout