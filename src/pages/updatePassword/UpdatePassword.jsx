import React from "react";
import "./updatePassword.css";
import Password from "../../assets/img/icon/passPage.png";

const UpdatePassword = () => {
  return (
    <div className="widget">
      <h3 className="widgetTitle pass">Change Password</h3>
      <div className="contPass">
      <div className="left">
        <img src={Password} alt="" />
      </div>
      <div className="right">
        <form>
        <div className="changePassItem">
          <label>New Password</label>
          <input
            type="password"
            name="newpass"
            value=""
            className="form-control"
          />
        </div>
        <div className="changePassItem">
        <label>Confirm Password</label>
          <input
            type="password"
            name="confpass"
            value=""
            className="form-control"
          />
        </div>
        <button className="btnSavePass">Save</button>
        </form>
      </div>
      </div>
      
    </div>
  );
};

export default UpdatePassword;
