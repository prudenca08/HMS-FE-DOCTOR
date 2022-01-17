import React, { useState } from "react";
import "./recipe.css";

export default function Recipe() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="recipe">
      <div className="recipeTitleContainer">
        <h3 className="ListTitle">Update Recipe</h3>
      </div>
      <div className="recipeUpdate">
        <form className="recipeUpdateForm">
          <div className="recipeUpdateLeft">
            <div className="recipeUpdateItem">
              <label>Patient Name</label>
              <input
                type="text"
                placeholder="Margareth Ellie"
                className="recipeUpdateInput"
              />
            </div>
            <div className="recipeUpdateItem">
              <label>Day</label>
              <input
                type="text"
                placeholder="Monday"
                className="recipeUpdateInput"
              />
            </div>

            <div className="recipeUpdateItem">
              <label>Title</label>
              <input
                type="text"
                placeholder="Luka Bakar"
                className="recipeUpdateInput"
              />
            </div>
            <div className="recipeUpdateItem">
              <label>Detail</label>
              <input
                type="textarea"
                placeholder="asdsfsdffdgfdgdsd"
                className="recipeUpdateInput"
              />
            </div>
            <button className="recipeUpdateButton">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
