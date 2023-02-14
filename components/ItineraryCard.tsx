import { Itinerary } from "@/types/types";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/util/firebase";
import DeleteAlert from "./DeleteAlert";
import { useState } from "react";
import Link from "next/link";

export default function ItineraryCard({ itinerary, collection, href }) {
  const dates: string[] = [];
  function getDates() {
    itinerary.dates.map((date: string) => dates.push(date));
  }
  itinerary.dates ? getDates() : null;

  const itineraryID = itinerary.id;

  const currentItinerary = doc(db, "itineraries", itineraryID);

  const handleDeleteItinary = async () => {
    await deleteDoc(currentItinerary);
  };

  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const styles = {
    title: {
      color: "white",
      fontSize: 32,
    },
    infoContainer: {
      display: "flex",
      flexDirection: "column" as "column",
    },
    dates: {
      color: "white",
      fontSize: 16,
    },
  };

  return (
    <>
      <Card
        sx={{
          width: 275,
          marginBottom: "3%",
          borderRadius: 4,
          boxShadow: 5,
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0, 0.8)), url(${itinerary.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: 5,
        }}
      >
        <CardActionArea>
          <Link href={href}>
            <CardContent
              style={{
                padding: 25,
                paddingLeft: 30,
                display: "flex",
                alignItems: "flex-end",
                height: 230,
              }}
            >
              <div style={styles.infoContainer}>
                <p style={styles.title}>{itinerary.location}</p>
                {dates.length > 0 && dates[0] !== "" && dates[1] !== "" ? (
                  <p style={styles.dates}>
                    {dates[0]} - {dates[1]}
                  </p>
                ) : null}
              </div>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <IconButton
            onClick={() => {
              setOpenDeleteAlert(true);
            }}
            size="small"
            sx={{
              backgroundColor: "rgb(72,75,74, 0.2)",
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              padding: "10px",
            }}
          >
            <DeleteOutlineIcon sx={{ fontSize: 22, color: "white" }} />
          </IconButton>
        </CardActions>
      </Card>

      <DeleteAlert
        open={openDeleteAlert}
        setOpen={setOpenDeleteAlert}
        handleDelete={handleDeleteItinary}
        alertOpen={alertOpen}
        setAlertOpen={setAlertOpen}
      />
    </>
  );
}

// FIX HOW THE NAVIGATION GOES TO THE ACTUAL CARD CONTENT AFTER DELETING
