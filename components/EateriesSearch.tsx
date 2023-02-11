import React, { MouseEventHandler, SetStateAction } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MapIcon from "@mui/icons-material/Map";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

type InputProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<SetStateAction<string>>;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
};

export default function EateriesSearch({
  searchTerm,
  setSearchTerm,
  location,
  setLocation,
  onSubmit,
}: InputProps) {
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
    restaurantInput: {
      display: "flex",
      flex: 2,
    },
    locationInput: {
      display: "flex",
      flex: 1,
      marginLeft: 10,
    },
  };

  return (
    <Paper
      elevation={7}
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "5%",
        padding: 1,
        marginTop: "5%",
        width: "90%",
        justifyContent: "space-between",
      }}
    >
      <div style={styles.restaurantInput}>
        <RestaurantIcon style={{ margin: 10, color: "gray" }} />
        <InputBase
          value={searchTerm}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(event.target.value);
          }}
          placeholder="Search restaurants!"
          style={{ fontFamily: "Optima, serif", fontSize: 20 }}
        />
      </div>

      <Divider orientation="vertical" flexItem />

      <div style={styles.locationInput}>
        <MapIcon style={{ margin: 10, color: "gray" }} />
        <InputBase
          value={location}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLocation(event.target.value);
          }}
          placeholder="Location"
          style={{ fontFamily: "Optima, serif", fontSize: 20 }}
        />
      </div>

      <Button
        onClick={onSubmit}
        endIcon={<SearchIcon />}
        sx={{
          color: "#f7f2e9",
          backgroundColor: "#557a95",
          fontFamily: "Optima, serif",
          fontSize: 16,
          borderRadius: 5,
        }}
        variant="contained"
      >
        Search
      </Button>
    </Paper>
  );
}
