import { db } from "@/util/firebase";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  InputLabel,
} from "@mui/material";
import { addDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { MouseEventHandler, SetStateAction, useState } from "react";

type InputProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  collection: any;
};

export default function AddNewItinerary({
  open,
  setOpen,
  handleClose,
  collection,
}: InputProps) {
  const styles = {
    datesInputContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: 5,
    },
    font: {
      fontFamily: "Optima, serif",
      color: "black",
    },
  };

  const [location, setLocation] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const disabled = location == "" ? true : false;

  // const selectedFile = document.getElementById("itineraryImage")
  //   ? document.getElementById("itineraryImage").files[0]
  //   : null;

  // add itinerary
  const handleAddItinerary = async function (e: {
    preventDefault: () => void;
  }) {
    e.preventDefault();

    setOpen(false);

    if (location == "") return;

    const newItinerary = {
      location: location,
      image: imageLink,
      dates: [fromDate, toDate],
      eateries: [],
      sights: [],
    };

    await addDoc(collection, newItinerary);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <p>Add New Itinerary</p>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <p>Enter your plan details!</p>
        </DialogContentText>
        <TextField
          autoFocus
          id="location"
          label="Location"
          type="text"
          fullWidth
          margin="normal"
          variant="standard"
          inputProps={{ style: styles.font }}
          InputLabelProps={{ style: styles.font }}
          required
          value={location}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLocation(event.target.value);
          }}
        />
        {/* <InputLabel sx={[styles.font, { marginTop: 1, marginBottom: 1 }]}>
          Choose image for itinerary (optional)
        </InputLabel> */}

        {/* <input
          type="file"
          accept="image/png, image/jpeg"
          style={styles.font}
          id="itineraryImage"
        ></input> */}

        <TextField
          autoFocus
          id="image-link"
          label="Itinerary Image Link"
          type="text"
          fullWidth
          margin="normal"
          variant="standard"
          inputProps={{ style: styles.font }}
          InputLabelProps={{ style: styles.font }}
          value={imageLink}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setImageLink(event.target.value);
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 15,
          }}
        >
          <InputLabel sx={styles.font}>Dates (optional)</InputLabel>

          <div style={styles.datesInputContainer}>
            <TextField
              type="date"
              variant="standard"
              inputProps={{ style: styles.font }}
              InputLabelProps={{ style: styles.font }}
              value={fromDate}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFromDate(event.target.value);
              }}
            />
            <p style={{ marginLeft: 5, marginRight: 5 }}>to</p>
            <TextField
              type="date"
              variant="standard"
              inputProps={{ style: styles.font }}
              InputLabelProps={{ style: styles.font }}
              value={toDate}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setToDate(event.target.value);
              }}
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button onClick={handleClose}>
          <p>Cancel</p>
        </Button>
        <Button
          disabled={disabled}
          onClick={handleAddItinerary}
          sx={{ backgroundColor: "#557A95", borderRadius: 50 }}
        >
          <p style={{ color: "white" }}>Add</p>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
