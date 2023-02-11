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
import { MouseEventHandler, SetStateAction } from "react";

type InputProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  handleClose: MouseEventHandler<HTMLButtonElement>;
};

export default function AddNewItinerary({
  open,
  setOpen,
  handleClose,
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
          id="name"
          label="Location"
          type="text"
          fullWidth
          margin="normal"
          variant="standard"
          inputProps={{ style: styles.font }}
          InputLabelProps={{ style: styles.font }}
          required
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
            />
            <p style={{ marginLeft: 5, marginRight: 5 }}>to</p>
            <TextField
              type="date"
              variant="standard"
              inputProps={{ style: styles.font }}
              InputLabelProps={{ style: styles.font }}
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button onClick={handleClose}>
          <p>Cancel</p>
        </Button>
        <Button
          onClick={handleClose}
          sx={{ backgroundColor: "#557A95", borderRadius: 50 }}
        >
          <p style={{ color: "white" }}>Add</p>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
