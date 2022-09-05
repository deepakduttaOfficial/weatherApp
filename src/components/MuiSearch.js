import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Paper, Stack, TextField } from "@mui/material";
import { tempt } from "./helper";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Temp from "./Temp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MuiSearch = () => {
  const [sendValue, setSendValue] = useState();
  const [values, setValues] = useState({});
  const [fatch, setFatch] = useState(false);

  const isClick = (e) => {
    e.preventDefault();
    setFatch(true);
  };

  useEffect(() => {
    if (fatch) {
      tempt(sendValue).then((data) => {
        if (data.message) {
          toast.error(`${data.message}`, { theme: "dark", autoClose: 1000 });
          setFatch(false);
        } else {
          toast.success(`I found this result`, {
            theme: "dark",
            autoClose: 1000,
          });
          setValues(data);
          setFatch(false);
        }
      });
    }
    return;
  });

  return (
    <>
      <ToastContainer />
      <Stack mt={6} alignItems={"center"} sx={{ padding: "2rem" }}>
        <form onSubmit={isClick}>
          <TextField
            onChange={(e) => {
              setSendValue(e.target.value);
            }}
            component={Paper}
            elevation={7}
            id="outlined-basic"
            placeholder="Search any city weather..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={fatch}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </form>
      </Stack>
      <Temp values={values} />
    </>
  );
};

export default MuiSearch;
