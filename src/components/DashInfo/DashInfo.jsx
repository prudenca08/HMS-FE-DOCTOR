import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./dashInfo.css";
import { outpatientRows } from "../../dummyData";
import {
  actionGetAllOutpatients,
} from "../../config/redux/action";

const DashInfo = (props) => {
  const [data, setData] = useState(outpatientRows);

  useEffect(() => {
    if (props.outpatient.length <= 0) {
      props.AllOutpatient().then(() => {
      
      });
    } else {
      setData(props.outpatient);
    }
  }, [props]);

  return (
    <div className="dashInfo">
      <div className="dashItem">
        <span className="dashTitle">Total Outpatient</span>
        <div className="dashCount">
          <span className="count">{props.outpatient.length}</span>
        </div>
      </div>
    </div>
  );
};

const reduxState = (state) => ({
  outpatient: state.outpatient,
 
});
const reduxDispatch = (dispatch) => ({
  AllOutpatient: (data) => dispatch(actionGetAllOutpatients(data)),
 
});

export default connect(reduxState, reduxDispatch)(DashInfo);
