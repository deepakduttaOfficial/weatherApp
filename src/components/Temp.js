import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";

const getFormatedDate = (utcTime) => {
  let unix_timestamp = utcTime;
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
};

const Temp = ({ values }) => {
  return (
    <>
      <Container maxWidth={"md"}>
        <Paper elevation={7}>
          <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">City name :</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <strong>{values.name}</strong>
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Country Name :</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <strong>{values.sys && values.sys.country}</strong>
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Temprature(Deg.) :</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <strong>{values.main && values.main.temp}</strong>
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">
                    Maxium Temprature(Deg.) :
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <strong>{values.main && values.main.temp_max}</strong>
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">
                    Minimuam Temprature(Deg.) :
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <strong>{values.main && values.main.temp_min}</strong>
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">visibility(Km) :</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <strong>{values.visibility}</strong>
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">
                    City geo location, latitude
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <strong>{values.coord && values.coord.lat}</strong>
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">
                    City geo location, longitude
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <strong>{values.coord && values.coord.lon}</strong>
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Time Zone</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <strong>
                      {values.timezone && getFormatedDate(values.timezone)}
                    </strong>
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Sunrise</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <strong>
                      {values.sys && getFormatedDate(values.sys.sunrise)}
                    </strong>
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Sunset</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <strong>
                      {values.sys && getFormatedDate(values.sys.sunset)}
                    </strong>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </>
  );
};

export default Temp;
