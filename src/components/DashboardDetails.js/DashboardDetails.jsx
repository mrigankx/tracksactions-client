import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  CircularProgress,
  Button,
  Grow,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import useStyles from "./style";
import AddExpense from "../AddExpense/AddExpense";
import ChangeBalance from "../ChangeBalance/ChangeBalance";

import DeleteIcon from "@material-ui/icons/Delete";
import * as api from "../../api/index";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Graphs from "../Graphs/Graphs";
import filteredData from "../../utils/filteredData";
const columns = [
  { field: "_id", headerName: "ID", hide: true },
  {
    field: "entrydate",
    headerName: "Date",
    width: 130,
    valueFormatter: (params) => {
      const formattedValue = new Date(params.value).toLocaleDateString();
      return formattedValue;
    },
  },
  { field: "spent_category", headerName: "Category", width: 130 },
  { field: "spent_on", headerName: "Spent On", width: 130 },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    valueFormatter: (params) => {
      return `₹ ${params.value}`;
    },
    width: 130,
  },
];
const DashboardDetails = ({ userinfo, isShow }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const deleteRows = async () => {
    try {
      const res = await api.deleteexpense({ selectedRows });
      if (!res.status === 201) {
        const error = new Error(res.error);
        throw error;
      }
      toast.success("Deleted Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.log(error);
      toast.warn("Error while deleting expense", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    history.push("/dashboard");
    setSelectedRows([]);
  };
  useEffect(() => {
    if (selectedRows.length) {
      setIsDelete(true);
    } else {
      setIsDelete(false);
    }
  }, [selectedRows]);
  return (
    <>
      {!userinfo.length ? (
        <>
          <CircularProgress />
        </>
      ) : (
        <>
          <Grid item xs={12} sm={9}>
            <div className={classes.data_table}>
              <Typography
                variant="h4"
                align="center"
                className={classes.table_header}
              >
                Expenses Till Now
              </Typography>
              {isDelete && (
                <Grow in>
                  <Button
                    variant="contained"
                    className={classes.del_exp}
                    onClick={deleteRows}
                  >
                    <DeleteIcon />
                    &nbsp; Delete
                  </Button>
                </Grow>
              )}
              <DataGrid
                rows={userinfo}
                columns={columns}
                pageSize={10}
                getRowId={(row) => row._id}
                className={classes.data_grid}
                checkboxSelection
                onSelectionModelChange={(selectedRows) =>
                  setSelectedRows(selectedRows)
                }
              />
            </div>
            <Graphs userinfo={filteredData(userinfo)} />
          </Grid>
        </>
      )}
      <Grid item xs={12} sm={3}>
        <AddExpense />
        {isShow && <ChangeBalance />}
      </Grid>
    </>
  );
};

export default DashboardDetails;
