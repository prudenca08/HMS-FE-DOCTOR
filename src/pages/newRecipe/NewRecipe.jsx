import React, { useState } from "react";
import "./newRecipe.css";
import DatePicker from "react-datepicker";

export default function NewRecipe() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="newRecipe">
      <h2 className="newRecipeTitle">New Recipe</h2>

      <form className="newRecipeForm">
        <div className="newRecipeItem">
          <label> Patient Name</label>
          <input type="text" placeholder="Enter Full Name" />
        </div>
        <div className="newRecipeItem">
          <label>Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            value="29/12/2021"
          ></DatePicker>
        </div>

        <div className="newRecipeItem">
          <label>Title</label>
          <input type="text" placeholder="Enter Title Name" />
        </div>
        <div className="newRecipeItem">
          <label>Detail</label>
          <textarea type="text" placeholder="Enter Detail" />
        </div>
        <button className="newRecipeButton">Add New</button>
      </form>
    </div>
  );
}
