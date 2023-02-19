import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import { Category, Result } from "@/types/types";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

type InputProps = {
  result: Result;
};

export default function SightsCard({ result }: InputProps) {
  // const photoReference = result.photos[0];
  // const axios = require("axios");
  // const [thumbnail, setThumbnail] = useState();

  // const imageConfig = {
  //   method: "get",
  //   url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo",
  //   params: {
  //     photo_reference: photoReference,
  //     key: "AIzaSyCC1OsgmQaL3R0m-WHduyMClHQP4lycayA",
  //   },
  // };

  // const getImage = () => {
  //   axios(imageConfig)
  //     .then(function (response) {
  //       setThumbnail(response);
  //       console.log(thumbnail);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const status = result.is_closed ? "Closed" : "Open";

  const [open, setOpen] = useState(false);

  // add button
  const handleAdd = function (operation: string) {
    if (operation === "itinerary") {
      setOpen(true);
    } else if (operation === "save") {
      console.log("just saved!");
    }
  };

  const styles = {
    img: {
      width: 250,
      height: 250,
    },
    textContainer: {
      paddingLeft: 20,
      width: 320,
    },
    title: {
      fontSize: 24,
      marginBottom: "2%",
      color: "black",
      fontWeight: "bold",
    },
    ratingContainer: {
      display: "flex",
      alignItems: "center",
      gap: "3%",
    },
    closed: {
      color: "red",
      marginTop: "5%",
      fontSize: 18,
    },
    open: {
      color: "green",
      marginTop: "5%",
      fontSize: 18,
    },
  };

  // set status style
  const statusStyle = result.is_closed ? styles.closed : styles.open;

  // actions for speed dial
  const actions = [
    {
      name: "Save to itinerary",
      icon: <AddIcon />,
      operation: "itinerary",
    },
    {
      name: "Save for later",
      icon: <BookmarkBorderIcon />,
      operation: "save",
    },
  ];

  return (
    <Card
      sx={{ width: 600, marginBottom: "3%", borderRadius: 4, boxShadow: 5 }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={result.image_url}
            alt=""
            style={styles.img}
          />
          <div style={styles.textContainer}>
            <p style={{ marginBottom: "2%" }}>{result.vicinity}</p>
            <p style={styles.title}>{result.name}</p>

            <div style={styles.ratingContainer}>
              <Rating value={result.rating} readOnly />
              <p style={{ color: "black" }}>({result.rating})</p>
              <p style={{ color: "black", width: 200 }}>
                {result.user_ratings_total} Reviews
              </p>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
