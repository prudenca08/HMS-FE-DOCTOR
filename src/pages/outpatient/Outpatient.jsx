import React, { useState } from "react";
import "./outpatient.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Outpatient() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="outpatient">
      <div className="outpatientTitleContainer">
        <h3 className="ListTitle">Edit Outpatient</h3>
      </div>
      <div className="outpatientContainer">
        <div className="outpatientShow">
          <div className="outpatientShowDetail">
            <span className="outpatientShowTitle">Outpatient Details</span>
            <div className="outpatientShowInfo">
              <PermIdentityIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">Margareth Ellie</span>
            </div>
            <div className="outpatientShowInfo">
              <ConfirmationNumberIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">Monday</span>
            </div>
            <div className="outpatientShowInfo">
              <CalendarTodayIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">29/12/2021</span>
            </div>
            <div className="outpatientShowInfo">
              <AccessAlarmIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">10.00 - 10.50</span>
            </div>
            <div className="outpatientShowInfo">
              <AssignmentIndIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">
                dr.Thomas Harianja
              </span>
            </div>
            <div className="outpatientShowInfo">
              <LocalHospitalIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">
                Gatal-gatal, sesak nafas, demam, batuk, pilek, mata berair,
                lorem ipsum dolor sit amet narmis
              </span>
            </div>
            <div className="outpatientShowInfo">
              <MeetingRoomIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">A27</span>
            </div>
            <div className="outpatientShowInfo">
              <AssignmentTurnedInIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">On Progress</span>
            </div>
          </div>
        </div>
        <div className="outpatientUpdate">
          <span className="outpatientUpdateTitle">Edit</span>
          <form className="outpatientUpdateForm">
            <div className="outpatientUpdateLeft">
              <div className="outpatientUpdateItem">
                <label>Patient Name</label>
                <input
                  type="text"
                  placeholder="Margareth Ellie"
                  className="outpatientUpdateInput"
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Day</label>
                <input
                  type="text"
                  placeholder="Monday"
                  className="outpatientUpdateInput"
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  }
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                  placeholderText="29/12/2021"
                ></DatePicker>
              </div>
              <div className="outpatientUpdateItem">
                <label>Time</label>
                <input
                  type="text"
                  placeholder="10.00m - 10.50"
                  className="outpatientUpdateInput"
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Doctor</label>
                <input
                  type="text"
                  placeholder="dr.Thomas Harianja"
                  className="outpatientUpdateInput"
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Room</label>
                <input
                  type="text"
                  placeholder="A27"
                  className="outpatientUpdateInput"
                />
              </div>
            </div>
            <div className="outpatientUpdateRight">
              <div className="outpatientUpdateItem">
                <label>Symptoms</label>
                <textarea
                  type="text"
                  placeholder="Gatal-gatal, sesak nafas, demam, batuk, pilek, mata berair, lorem ipsum dolor sit amet narmis"
                  className="outpatientUpdateInput"
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Status</label>
                <select name="status" id="status">
                  <option value="waiting">Waiting</option>
                  <option value="onProgress">On Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
              <button className="outpatientUpdateButton">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
