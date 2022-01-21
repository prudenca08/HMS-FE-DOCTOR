import React, { useEffect, useState } from "react";
import "./patientsList.css";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@material-ui/icons/Edit";
import { patientRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionGetAllPatients } from "../../config/redux/action";

const PatientsList = (props)=> {
  const [data, setData] = useState(patientRows);

  useEffect(() => {
    if (props.patient.length <= 0) {
      props.AllPatients().then(() => {
       
        console.log(props.patient);
      });
    }else{
      setData(props.patient)
    }

  }, [props]);

  const columns = [
    { field: "name", headerName: "Name", width: 130 },
    { field: "nik", headerName: "NIK", width: 130 },
    {
      field: "dob",
      headerName: "Date of Birth",
      type: "date",
      width: 120,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 90,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      type: "number",
      width: 130,
    },
    {
      field: "address",
      headerName: "Address",
      width: 130,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/patient/" + params.row.id}>
              <EditIcon className="patientsEdit" />
            </Link>

          </>
        );
      },
    },
  ];

  return (
    <div className="patientsList p-3">
      <div className="patientListTitleContainer">
        <h3 className="ListTitle">Patients</h3>
      </div>
      <div className="grid-holder">
        {props.patient.length !== 0 && (
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[25]}
            checkboxSelection
            autoHeight={true}
            // disableSelectionOnClick
          />
        )}
      </div>
     
    </div>
  );
}

const reduxState = (state) => ({
  patient: state.patient,
});
const reduxDispatch = (dispatch) => ({
  AllPatients: (data) => dispatch(actionGetAllPatients(data)),
});

export default connect(reduxState, reduxDispatch)(PatientsList);
