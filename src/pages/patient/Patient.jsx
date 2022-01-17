import React, { useState } from "react";
import "./patient.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import WcIcon from "@material-ui/icons/Wc";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";


const Patient = (props) => {
  const [field, setField] = useState({
    id : "",
    name: "",
    nik: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    symptoms: "",
  });

  const [patient, setPatient] = useState({});
 

  useEffect(() => {
    if (props.patient.length !== 0 && patient.name === undefined) {
      setPatient(props.patient.find((i) => i.id === Number(params.patientId)));
    } else if (patient.name !== undefined) {
      let tmp = {};
      Object.keys(field).forEach((k) => {
        tmp[k] = patient[k];
        console.log(patient[k]);
      });
      setField(tmp);
    }
  }, [patient, props]);

  const params = useParams();
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
              <span className="patientShowInfoTitle">{patient.name}</span>
            </div>
            <div className="patientShowInfo">
              <ConfirmationNumberIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">{patient.nik}</span>
            </div>
            <div className="patientShowInfo">
              <CalendarTodayIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">{patient.dob}</span>
            </div>
            <div className="patientShowInfo">
              <WcIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">{patient.gender}</span>
            </div>
            <div className="patientShowInfo">
              <PhoneIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">{patient.phone}</span>
            </div>
            <div className="patientShowInfo">
              <HomeIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">{patient.address}</span>
            </div>
            <div className="patientShowInfo">
              <LocalHospitalIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">{patient.symptoms}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const reduxState = (state) => ({
  patient: state.patient,
});
const reduxDispatch = (dispatch) => ({
 
});

export default connect(reduxState, reduxDispatch)(Patient);
