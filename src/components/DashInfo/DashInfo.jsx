import React from "react";
import "./dashInfo.css";

export default function DashInfo() {
  return (
    <div className="dashInfo">
      <div className="dashItem outpatient">
        <span className="dashTitle">Total Outpatient</span>
        <div className="dashCount">
          <span className="count">3</span>
        </div>
      </div>
    </div>
  );
}
