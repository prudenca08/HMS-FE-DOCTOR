import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import PatientIcon from "../../assets/img/icon/patientIcon.png";
import RecipeIcon from "../../assets/img/icon/recipeIcon.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
          <Link to= "/" className="link" >
            <li className="sidebarListItem active">
              <HomeIcon className="sidebarIcon" />
              Dashboard
            </li>
            </Link>
            <Link to= "/patients" className="link" >
            <li className="sidebarListItem">
              <img src={PatientIcon} className="sidebarIcon" alt="" />
              Patients
            </li>
            </Link>
            <li className="sidebarListItem">
              <img src={RecipeIcon} className="sidebarIcon" alt="" />
              Recipe
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
