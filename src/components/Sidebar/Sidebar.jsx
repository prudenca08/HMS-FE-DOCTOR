import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import PatientIcon from "../../assets/img/icon/patientIcon.png";
import PasswordIcon from "../../assets/img/icon/passwordIcon.png";
import ManageIcon from "../../assets/img/icon/manageIcon.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <HomeIcon className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
            <Link to="/patients" className="link">
              <li className="sidebarListItem">
                <img src={PatientIcon} className="sidebarIcon" alt="" />
                Patients
              </li>
            </Link>
            <Link to="/outpatients" className="link">
              <li className="sidebarListItem">
                <img src={ManageIcon} className="sidebarIcon" alt="" />
                Outpatient
              </li>
            </Link>
            <Link to="/updatePassword" className="link">
              <li className="sidebarListItem">
                <img src={PasswordIcon} className="sidebarIcon" alt="" />
                Password
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
