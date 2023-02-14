import { Itinerary } from "@/types/types";
import { Card, CardActionArea, CardContent, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/util/firebase";

export default function ItineraryCard({ itinerary, collection }) {
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
    <Card
      sx={{
        width: 276,
        marginBottom: "3%",
        borderRadius: 4,
        boxShadow: 5,
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0, 0.8)), url(${itinerary.image})`,
        backgroundPosition: "center",
        height: 276,
        backgroundSize: "cover",
        marginTop: 5,
      }}
    >
      <CardActionArea>
        <CardContent
          style={{
            padding: 25,
            paddingLeft: 30,
            display: "flex",
            alignItems: "flex-end",
            height: 276,
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
          <IconButton
            onClick={handleDeleteItinary}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: "rgb(72,75,74, 0.2)",
            }}
          >
            <DeleteOutlineIcon sx={{ fontSize: 22, color: "white" }} />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// FIX HOW THE NAVIGATION GOES TO THE ACTUAL CARD CONTENT AFTER DELETING
