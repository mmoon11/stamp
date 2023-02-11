import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useState } from "react";
import AddToItinerary from "./AddToItinerary";
import { Category } from "@/types/types";

export default function ItemCard({ result, setSearchTerm }: any) {
  //set status of restaurant
  const status = result.is_closed ? "Closed" : "Open";

  const [open, setOpen] = useState(false);

  // add button
  const handleAdd = function (operation: string) {
    if (operation === "itinerary") {
      setOpen(true);
      console.log(open);
    } else if (operation === "save") {
      console.log("just saved!");
    }
  };

  // styles
  const styles = {
    img: {
      width: 250,
      height: 250,
    },
    cardContainer: {
      display: "flex",
      alignItems: "center",
    },
    textContainer: {
      paddingLeft: 20,
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
    chipsContainer: {
      display: "flex",
      alignItems: "center",
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
    phone: {
      marginTop: "5%",
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
    <>
      <Card
        sx={{ width: 600, marginBottom: "3%", borderRadius: 4, boxShadow: 5 }}
      >
        <CardActionArea>
          <CardContent style={{ padding: 0 }}>
            <div style={styles.cardContainer}>
              <CardMedia
                component="img"
                image={result.image_url}
                alt=""
                style={styles.img}
              />

              <div style={styles.textContainer}>
                <p style={{ marginBottom: "2%" }}>
                  {result.location.city}, {result.location.state}
                </p>
                <p style={styles.title}>{result.name}</p>
                <div style={styles.ratingContainer}>
                  <Rating value={result.rating} readOnly />
                  <p style={{ color: "black" }}>({result.review_count})</p>
                  <p
                    style={{
                      marginLeft: "3%",
                      color: "black",
                      fontSize: 14,
                      backgroundColor: "#ebebeb",
                      padding: 5,
                      borderRadius: 20,
                    }}
                  >
                    {result.price}
                  </p>
                </div>
                <ul style={{ marginTop: "2%" }}>
                  {result.categories.map(
                    (category: Category, index: number) => (
                      <Chip
                        key={index}
                        label={category.title}
                        size="small"
                        style={{
                          fontSize: 12,
                          fontFamily: "Optima, serif",
                          marginRight: "2%",
                          marginTop: "2%",
                        }}
                        onClick={() => {
                          setSearchTerm(category.title);
                        }}
                      />
                    )
                  )}
                </ul>
                <p style={statusStyle}>{status}</p>
                <p style={styles.phone}>{result.phone}</p>
              </div>
            </div>
            <SpeedDial
              sx={{
                position: "absolute",
                bottom: 16,
                right: 16,
                "& .MuiFab-primary": {
                  width: 50,
                  height: 50,
                  backgroundColor: "#557A95",
                  color: "white",
                },
              }}
              icon={<SpeedDialIcon />}
              ariaLabel={""}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={() => {
                    handleAdd(action.operation);
                  }}
                />
              ))}
            </SpeedDial>
          </CardContent>
        </CardActionArea>
      </Card>

      <AddToItinerary open={open} setOpen={setOpen} eatery={result} />
    </>
  );
}
