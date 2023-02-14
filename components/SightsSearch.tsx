import {
  Button,
  InputBase,
  Paper,
  Divider,
  Select,
  SelectChangeEvent,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import MapIcon from "@mui/icons-material/Map";

export default function SightsSearch({ results, setResults }) {
  // useState
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [placeID, setPlaceID] = useState<any>();
  const [coordinates, setCoordinates] = useState("");

  const axios = require("axios");

  const locationConfig = {
    method: "get",
    url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json",
    params: {
      input: location,
      radius: "50000",
      types: "geocode",
      key: "AIzaSyCC1OsgmQaL3R0m-WHduyMClHQP4lycayA",
    },
  };

  const getLocation = () => {
    axios(locationConfig)
      .then(function (response) {
        setPlaceID(JSON.stringify(response.data.predictions[0].place_id));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const coordinatesConfig = {
    method: "get",
    url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json",
    params: {
      // replace
      place_id: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
      fields: "geometry",
      key: "AIzaSyCC1OsgmQaL3R0m-WHduyMClHQP4lycayA",
    },
  };

  const getLocationCoordinates = () => {
    axios(coordinatesConfig)
      .then(function (response) {
        const map = response.data.result.geometry.location;
        setCoordinates(`${map.lat},${map.lng}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getImage = () => {};

  const config = {
    method: "get",
    url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json",
    params: {
      keyword: searchTerm,
      location: coordinates,
      radius: 50000,
      type: type,
      key: "AIzaSyCC1OsgmQaL3R0m-WHduyMClHQP4lycayA",
    },
  };

  const searchGoogleAPI = () => {
    getLocation();
    getLocationCoordinates();

    axios(config)
      .then(function (response) {
        setResults(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const styles = {
    searchTermContainer: {
      display: "flex",
      flex: 3,
    },
    typeInputContainer: {
      display: "flex",
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "center",
    },
    icon: {
      margin: 10,
      color: "gray",
    },
    menuItem: {
      fontFamily: "Optima, serif",
    },
    locationContainer: {
      display: "flex",
      flex: 1.5,
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
      <div style={styles.searchTermContainer}>
        <PlaceIcon style={styles.icon} />
        <InputBase
          value={searchTerm}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(event.target.value);
          }}
          placeholder="Search"
          style={{ fontFamily: "Optima, serif", fontSize: 20, width: "100%" }}
        />
      </div>

      <Divider orientation="vertical" flexItem />

      <div style={styles.typeInputContainer}>
        <FormControl
          sx={{
            width: "100%",
            marginTop: 1,
            marginBottom: 1,
          }}
        >
          <InputLabel id="type" sx={styles.menuItem}>
            Type
          </InputLabel>
          <Select
            labelId="type"
            value={type}
            onChange={(event: SelectChangeEvent<string>) => {
              setType(event.target.value);
            }}
            label="Type"
            variant="standard"
            size="small"
          >
            <MenuItem value="airport">
              <p>Airport</p>
            </MenuItem>
            <MenuItem value="museum">
              <p>Museum</p>
            </MenuItem>
            <MenuItem value="park">
              <p>Park</p>
            </MenuItem>
            <MenuItem value="stadium">
              <p>Stadium</p>
            </MenuItem>
            <MenuItem value="tourist_attraction">
              <p>Tourist Attraction</p>
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <Divider orientation="vertical" flexItem />

      <div style={styles.locationContainer}>
        <MapIcon style={styles.icon} />
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
        onClick={searchGoogleAPI}
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
