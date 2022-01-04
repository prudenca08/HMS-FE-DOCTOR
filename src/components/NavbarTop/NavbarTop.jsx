import React from "react";
import "./navbarTop.css";
import Logo from "../../assets/img/logo/logo.png";
import Avatar from "../../assets/img/icon/avatar.png";
import { useHistory } from "react-router-dom";

export default function NavbarTop(props) {
  const history = useHistory();
  const handleOnClickProfile = (event) => {
    let target = document.getElementById("dropdown-profile");
    if (target.classList.contains("hide")) {
      target.classList.remove("hide");
    } else {
      target.classList.add("hide");
    }
  };
  const handleOnClickRedirect = (event)=>{
      let target = event.target.getAttribute("to");
      history.push(target)
  }
  return (
    <div className="navbarTop">
      <div className="navbarTopWrapper">
        <div className="navbarTopLeft">
          <img src={Logo} alt="" className="logo" onClick={handleOnClickRedirect}  to="/" />
        </div>
        <div className="navbarTopRight">
          <img
            src={Avatar}
            alt=""
            className="avatar"
            id="dropdown-logout"
            onClick={handleOnClickProfile}
          />
          <div
            className="dropdown-item-custom shadow hide"
            id="dropdown-profile"
          >
            <span onClick={handleOnClickRedirect} to="/update-profile">Profile</span>
            <span>Log out</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}
