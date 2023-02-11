import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import { MouseEventHandler, SetStateAction } from "react";

type InputProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
  alertOpen: boolean;
  setAlertOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function DeleteEatery({
  open,
  setOpen,
  handleDelete,
  alertOpen,
  setAlertOpen,
}: InputProps) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClick={handleClose}>
        <DialogTitle>
          <p style={{ color: "black" }}>Delete eatery</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ color: "black" }}>
              Are you sure you would like to delete this item?
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <p>Cancel</p>
          </Button>
          <Button onClick={handleDelete} sx={{ backgroundColor: "#557a95" }}>
            <p style={{ color: "white" }}>Delete</p>
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleAlertClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully deleted!
        </Alert>
      </Snackbar>
    </>
  );
}
