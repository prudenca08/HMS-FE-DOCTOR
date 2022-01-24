import React, { useEffect, useState } from "react";
import "./manageOutpatient.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { outpatientRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { actionGetAllOutpatients } from "../../config/redux/action";
import { connect } from "react-redux";

const ManageOutpatient = (props)=> {

  const [data, setData] = useState(outpatientRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (props.outpatient.length <= 0) {
      props.AllOutpatient(Number(props.user.id)).then(() => {
        console.log(props.outpatient);
      });
    } else {
      setData(props.outpatient);
    }
  }, [props]);


  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "patientName", headerName: "Patient Name", width: 180 },
    { field: "day", headerName: "Day", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "time", headerName: "Time", width: 150 },
    { field: "doctor_name", headerName: "Doctor", width: 150 },
    { field: "room", headerName: "Room", width: 100 },
    { field: "symptoms", headerName: "Symptoms", width: 150 },
    {field: "title", headerName: "Diagnosis", width:150},
    {field: "detailrecipe", headerName: "Medicine Recipe", width:150},
    { field: "status", headerName: "Status", width: 100 },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="d-flex gap-3 align-items-center">
          <Link
            role="button"
            className="text-primary"
            to={"/outpatient/" + params.row.id}
          >
            <EditIcon />
          </Link>
          
        </div>
        );
      },
    },
  ];

  return (
    <div className="outpatientList p-4">
      <h1>Outpatient Session</h1>
      {props.outpatient.length !== 0 && (
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[25]}
          checkboxSelection
          autoHeight={true}
        />
      )}
    </div>
  );
}

const reduxState = (state) => ({
  user : state.user,
  outpatient: state.outpatient,
});
const reduxDispatch = (dispatch) => ({
  AllOutpatient: (data) => dispatch(actionGetAllOutpatients(data)),
});

export default connect(reduxState, reduxDispatch)(ManageOutpatient);