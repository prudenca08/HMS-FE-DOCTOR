import React from "react";
import "./patient.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import WcIcon from "@material-ui/icons/Wc";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";


export default function Patient() {
  return (
    <div className="patient">
      <div className="patientTitleContainer">
        <h3 className="patientTitle">Patient</h3>
      </div>
      <div className="patientContainer">
        <div className="patientShow">
          <div className="patientShowDetail">
            <span className="patientShowTitle">Patient Details</span>
            <div className="patientShowInfo">
              <PermIdentityIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">Margareth Ellie</span>
            </div>
            <div className="patientShowInfo">
              <ConfirmationNumberIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">12125634256</span>
            </div>
            <div className="patientShowInfo">
              <CalendarTodayIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">12 January 2000</span>
            </div>
            <div className="patientShowInfo">
              <WcIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">Perempuan</span>
            </div>
            <div className="patientShowInfo">
              <PhoneIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">081234567890</span>
            </div>
            <div className="patientShowInfo">
              <HomeIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">
                Jl. Bengawan no. 20A, Solo
              </span>
            </div>
            <div className="patientShowInfo">
              <LocalHospitalIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">
                Gatal-gatal, sesak nafas, demam, batuk, pilek, mata berair,
                lorem ipsum dolor sit amet narmis
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
