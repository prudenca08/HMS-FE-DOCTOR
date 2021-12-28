import React, { useState } from "react";
import "./patientsList.css";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@material-ui/icons/Edit";
import { patientRows } from "../../dummyData";
import { Link } from "react-router-dom";

export default function PatientsList() {
  const [data, setData] = useState(patientRows);


  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "patient_name", headerName: "Name", width: 130 },
    { field: "day", headerName: "day", width: 130 },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      width: 120,
    },
    {
      field: "time",
      headerName: "Time",
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
      field: "symptoms",
      headerName: "Symptoms",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
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
    <div className="patientsList">
      <div className="patientListTitleContainer">
        <h3 className="patientListTitle">Patients</h3>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
