import React, { useState } from "react";
import "./recipeList.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { recipeRows } from "../../dummyData";

export default function RecipeList() {
  const [data, setData] = useState(recipeRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "patientName", headerName: "Nama Pasien", width: 180 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "detail", headerName: "Detail", width: 300 },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/recipe/" + params.row.id}>
              <EditIcon className="recipeEdit" />
            </Link>
            <DeleteOutlineIcon
              className="recipeDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="recipeList">
      <div className="recipeListTitleContainer">
        <h3 className="ListTitle">Recipe</h3>
      </div>
      <div className="recipeAdd">
        <Link to="/newrecipe">
          <button className="recipeAddButton">+Add New</button>
        </Link>
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
