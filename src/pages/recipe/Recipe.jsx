import React, { useState } from "react";
import "./recipe.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DatePicker from "react-datepicker";
import RateReviewIcon from "@material-ui/icons/RateReview";
import FilterFramesIcon from "@material-ui/icons/FilterFrames";

export default function Recipe() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="recipe">
      <div className="recipeTitleContainer">
        <h3 className="ListTitle">Update Recipe</h3>
      </div>
      <div className="doctorContainer">
        <div className="doctorShow">
          <div className="doctorShowDetail">
            <span className="doctorShowTitle">Recipe Details</span>
            <div className="doctorShowInfo">
              <CalendarTodayIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">29/12/2021</span>
            </div>
            <div className="doctorShowInfo">
              <PermIdentityIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">Margareth Ellie</span>
            </div>
            <div className="doctorShowInfo">
              <RateReviewIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">Luka Bakar</span>
            </div>
            <div className="doctorShowInfo">
              <FilterFramesIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">
                Salep silver sulfadiazine, dioleskan pada luka dua kali sehari
              </span>
            </div>
          </div>
        </div>
        <div className="recipeUpdate">
        <span className="doctorUpdateTitle">Edit Recipe</span>
          <form className="recipeUpdateForm">
            <div className="recipeUpdateLeft">
              <div className="recipeUpdateItem">
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
                  value="29/12/2021"
                ></DatePicker>
              </div>
              <div className="recipeUpdateItem">
                <label>Patient Name</label>
                <input
                  type="text"
                  value="Margareth Ellie"
                  className="recipeUpdateInput"
                />
              </div>
              <div className="recipeUpdateItem">
                <label>Title</label>
                <input
                  type="text"
                  value="Luka Bakar"
                  className="recipeUpdateInput"
                />
              </div>
              <div className="recipeUpdateItem">
                <label>Detail</label>
                <textarea
                  type="text"
                  value="Salep silver sulfadiazine, dioleskan pada luka dua kali sehari"
                  className="recipeUpdateSymptoms"
                />
              </div>
              <button className="recipeUpdateButton">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
