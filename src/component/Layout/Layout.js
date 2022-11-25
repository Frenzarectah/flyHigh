import React from "react"
import Header from "./Header/Header"

/**
 * the main renderer of the app
 */

const Layout = ()=>{
    return(
        <div className="w-100 h-screen m-[10px]">
            <Header />
        </div>
    )
}

export default Layout