import React from 'react'
import "./navbarTop.css"
import Logo from "../../assets/img/logo/logo.png"
import Avatar from "../../assets/img/icon/avatar.png"

export default function NavbarTop() {
    return (
        <div className="navbarTop">
            <div className="navbarTopWrapper">
                <div className="navbarTopLeft">
                    <img src={Logo} alt ="" className="logo" />
                </div>
                <div className="navbarTopRight">
                    <img src={Avatar} alt="" className ="avatar"/>
                </div>
            </div>
        </div>
    )
}
