import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
} from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { collection, query, onSnapshot, doc } from "firebase/firestore";
import { db } from "../util/firebase";
import { updateDoc, arrayUnion } from "firebase/firestore";
import { Result, idList } from "@/types/types";
import AddIcon from "@mui/icons-material/Add";
import AddNewItinerary from "./AddNewItinerary";

type InputProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  eatery: Result;
  type: string;
};

export default function AddToItinerary({
  open,
  setOpen,
  eatery,
  type,
}: InputProps) {
  const itinerariesCollectionRef = collection(db, "itineraries");
  const itinerariesQuery = query(itinerariesCollectionRef);
  const [chosenID, setChosenID] = useState("");
  const chooseRef = chosenID !== "" ? doc(db, "itineraries", chosenID) : null;

  const [itineraries, setItineraries] = useState<idList>([]);

  const [openNewItinerary, setOpenNewItinerary] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(itinerariesQuery, (querySnapshot) => {
      const idList: idList = [];
      querySnapshot.docs.map((x) => {
        const obj = {
          location: x.get("location"),
          eateries: x.get("eateries"),
          sights: x.get("sights"),
          image: x.get("image"),
          dates: x.get("dates"),
        };
        const newObj = { ...obj, id: x.id };
        idList.push(newObj);
      });
      setItineraries(idList);
    });
    return unsubscribe;
  }, []);

  function handleSelect(event: SelectChangeEvent) {
    setChosenID(event.target.value);
  }

  const handleCancel = () => {
    setOpen(false);
  };

  // could add custom stuff here
  const objectToAdd = {
    display_phone: eatery.display_phone,
    id: eatery.id,
    image_url: eatery.image_url,
    is_closed: eatery.is_closed,
    city: eatery.location.city,
    state: eatery.location.state,
    country: eatery.location.country,
    name: eatery.name,
    price: eatery.price,
    rating: eatery.rating,
    review_count: eatery.review_count,
  };

  const handleAdd = async () => {
    setOpen(false);
    if (chooseRef) {
      if (type === "eatery") {
        await updateDoc(chooseRef, {
          eateries: arrayUnion(objectToAdd),
        });
      } else if (type === "sight") {
        console.log(objectToAdd);
        objectToAdd !== undefined
          ? await updateDoc(chooseRef, {
              sights: arrayUnion(objectToAdd),
            })
          : null;
      }
    }

    setAlertOpen(true);
  };

  const [alertOpen, setAlertOpen] = useState(false);

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  function addNewItinerary() {
    setOpenNewItinerary(true);
  }

  return (
    <>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>
          <p>Choose the itinerary</p>
        </DialogTitle>
        <DialogContent>
          <div>
            <FormControl fullWidth variant="standard">
              <InputLabel>
                <p>Itinerary</p>
              </InputLabel>
              <Select value={chosenID} onChange={handleSelect}>
                {itineraries.map((itinerary, index) => (
                  <MenuItem key={index} value={itinerary.id}>
                    <p>{itinerary.location}</p>
                  </MenuItem>
                ))}
                <MenuItem onClick={addNewItinerary}>
                  <AddIcon
                    fontSize="small"
                    sx={{ color: "#557A95", marginRight: "2px" }}
                  />
                  <p>Add new itinerary</p>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>
            <p>Cancel</p>
          </Button>
          <Button onClick={handleAdd} sx={{ backgroundColor: "#557A95" }}>
            <p style={{ color: "white" }}>Add</p>
          </Button>
        </DialogActions>
      </Dialog>

      <AddNewItinerary
        open={openNewItinerary}
        setOpen={setOpenNewItinerary}
        handleClose={() => {
          setOpenNewItinerary(false);
        }}
        collection={itinerariesCollectionRef}
      />

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
          Successfully added!
        </Alert>
      </Snackbar>
    </>
  );
}
