import React from "react";
import "./upPro.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import PhoneIcon from "@material-ui/icons/Phone";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import FaceIcon from "@material-ui/icons/Face";
import GradeIcon from "@material-ui/icons/Grade";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { useHistory } from "react-router-dom";

const Uppro = () => {
  const history = useHistory();
  const handleOnClickRedirect = (event) => {
    let target = event.target.getAttribute("to");
    history.push(target);
  };

  return (
    <div className="doctor">
      <div className="doctorTitleContainer">
        <h3 className="doctorTitle">Update Profile</h3>
      </div>
      <div className="doctorContainer">
        <div className="doctorShow">
          <div className="doctorShowDetail">
            <span className="doctorShowTitle">Doctor Details</span>
            <div className="doctorShowInfo">
              <PermIdentityIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">Margareth Ellie</span>
            </div>
            <div className="doctorShowInfo">
              <ConfirmationNumberIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">12125634256</span>
            </div>
            <div className="doctorShowInfo">
              <PhoneIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">088888</span>
            </div>
            <div className="doctorShowInfo">
              <NoteAddIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">Tenaga Dalam</span>
            </div>
            <div className="doctorShowInfo">
              <MeetingRoomIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">H2</span>
            </div>
            <div className="doctorShowInfo">
              <FaceIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">abc123</span>
            </div>
            <div className="doctorShowInfo">
              <GradeIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">
                S1- Kedokteran Umum Undip , S2 - Ilmu Perdukunan
              </span>
            </div>
          </div>
        </div>
        <div className="doctorUpdate">
          <span className="doctorUpdateTitle">Edit</span>
          <form className="doctorUpdateForm">
            <div className="doctorUpdateLeft">
              <div className="doctorUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  value="Margareth Ellie"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>NIP</label>
                <input
                  type="text"
                  value="12125634256"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  value="088888"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Specialist</label>
                <input
                  type="text"
                  value="Tenaga Dalam"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Room</label>
                <input type="text" value="H2" className="doctorUpdateInput" />
              </div>
            </div>
            <div className="doctorUpdateRight">
              <div className="doctorUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  value="abc123"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Status</label>
                <input
                  type="text"
                  placeholder="Standby"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Experince</label>
                <textarea
                  type="text"
                  value="S1- Kedokteran Umum Undip , S2 - Ilmu Perdukunan"
                  className="doctorUpdateInput"
                />
              </div>
              <button className="doctorUpdateButton">Save</button>
            </div>
          </form>
          <button
            className="passwordChangeButton"
            onClick={handleOnClickRedirect}
            to="/updatePassword"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Uppro;
