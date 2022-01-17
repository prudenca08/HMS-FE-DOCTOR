import React, { useState } from "react";
import "./newRecipe.css";

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
          <input type="text" placeholder="Enter Date" />
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
