import React, { SetStateAction, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { TextField, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterMoment } from "@mui/x-date-pickers-pro/AdapterMoment";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro/DesktopDateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Moment } from "moment";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";

type InputProps = {
  dates: DateRange<Moment>;
  setDates: React.Dispatch<SetStateAction<DateRange<Moment>>>;
  from: string;
  to: string;
  setFrom: React.Dispatch<React.SetStateAction<string>>;
  setTo: React.Dispatch<React.SetStateAction<string>>;
};

export default function FlightSearch({
  dates,
  setDates,
  from,
  to,
  setFrom,
  setTo,
}: InputProps) {
  const defaultProps = {
    options: ["1", "2"],
    getOptionLabel: (option: string) => option,
  };

  const styles = {
    width: {
      display: "flex",
      justifyContent: "center",
    },
    container: {
      width: "90%",
      display: "flex",
      paddingTop: "3%",
      justifyContent: "center",
    },
    middle: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      color: "#557A95",
      fontSize: 48,
    },
    suitcases: {
      maxWidth: 500,
      maxHeight: 640,
      marginTop: 50,
    },
    input: {
      fontFamily: "Optima, serif",
      fontSize: 20,
      marginRight: "1%",
    },
    font: {
      fontFamily: "Optima, serif",
    },
    dateInputContainer: {
      border: "none",
    },
    locationInputContainer: {
      display: "flex",
      width: "40%",
      alignItems: "center",
    },
  };

  return (
    <Paper
      elevation={7}
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
        padding: "12px",
        marginTop: "10%",
        width: "90%",
      }}
    >
      <div style={styles.locationInputContainer}>
        <FlightTakeoffIcon style={{ margin: 10, color: "gray" }} />
        <Autocomplete
          {...defaultProps}
          disableClearable
          freeSolo
          fullWidth
          value={from}
          renderInput={(params) => (
            <TextField
              {...params}
              label="From"
              InputLabelProps={{ style: styles.font }}
            />
          )}
        />
      </div>
      <div style={styles.locationInputContainer}>
        <FlightLandIcon style={{ margin: 10, color: "gray" }} />
        <Autocomplete
          {...defaultProps}
          disableClearable
          freeSolo
          fullWidth
          value={to}
          renderInput={(params) => (
            <TextField
              {...params}
              label="To"
              InputLabelProps={{ style: styles.font }}
            />
          )}
        />
      </div>

      <DateRangeIcon style={{ margin: 10, color: "gray" }} />
      <LocalizationProvider
        dateAdapter={AdapterMoment}
        localeText={{ start: "Depart", end: "Return" }}
      >
        <DesktopDateRangePicker
          value={dates}
          onChange={(newDates) => {
            setDates(newDates);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField
                {...startProps}
                value={dates[0]}
                InputLabelProps={{ style: styles.font }}
                sx={{ width: 120 }}
                InputProps={{ style: styles.font }}
              />

              <Box sx={{ mx: 2 }}>
                <p style={styles.input}>-</p>
              </Box>
              <TextField
                {...endProps}
                value={dates[1]}
                InputLabelProps={{ style: styles.font }}
                sx={{ width: 120 }}
                InputProps={{ style: styles.font }}
              />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
      <PersonIcon style={{ margin: 10, color: "gray" }} />
      <TextField
        type="number"
        defaultValue={1}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <p style={styles.font}>Adults</p>
            </InputAdornment>
          ),
          style: styles.font,
        }}
        label="Travelers"
        sx={{ width: "20%", paddingRight: "3%" }}
        InputLabelProps={{ style: styles.font }}
      />
      <IconButton
        size="medium"
        sx={{
          backgroundColor: "#557A95",
          color: "white",
          marginRight: "1%",
        }}
      >
        <SearchIcon fontSize="inherit" />
      </IconButton>
    </Paper>
  );
}
