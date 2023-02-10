import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { collection, query, onSnapshot, doc } from "firebase/firestore";
import { db } from "../util/firebase";
import { updateDoc, arrayUnion } from "firebase/firestore";

type InputProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  eatery: any;
};

export default function AddToItinerary({ open, setOpen, eatery }: InputProps) {
  const itinerariesCollectionRef = collection(db, "itineraries");
  const itinerariesQuery = query(itinerariesCollectionRef);
  const [chosenID, setChosenID] = useState("");
  const chooseRef = chosenID !== "" ? doc(db, "itineraries", chosenID) : null;

  const [itineraries, setItineraries] = useState([]);

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

  console.log(eatery);

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
    await updateDoc(chooseRef, {
      eateries: arrayUnion(objectToAdd),
    });
  };

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>
        <p>Choose the itinerary</p>
      </DialogTitle>
      <DialogContent>
        <div>
          <FormControl fullWidth variant="standard">
            <InputLabel>Itinerary</InputLabel>
            <Select value={chosenID} onChange={handleSelect}>
              {itineraries.map((itinerary, index) => (
                <MenuItem key={index} value={itinerary.id}>
                  {itinerary.location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
