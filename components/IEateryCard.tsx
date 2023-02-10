import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Rating,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function IEateryCard({ eatery }: any) {
  console.log(eatery);
  //set status of restaurant
  const status = eatery.is_closed ? "Closed" : "Open";

  // delete button
  const handleDelete = function () {};

  // styles
  const styles = {
    img: {
      width: 170,
      height: 170,
    },
    cardContainer: {
      display: "flex",
      alignItems: "center",
    },
    textContainer: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 20,
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
      fontSize: 16,
    },
    phone: {
      marginTop: "5%",
    },
  };

  // set status style
  const statusStyle = eatery.is_closed ? styles.closed : styles.open;

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
      sx={{ width: "30%", marginBottom: "3%", borderRadius: 4, boxShadow: 5 }}
    >
      <CardActionArea>
        <CardContent style={{ padding: 0 }}>
          <div style={styles.cardContainer}>
            <CardMedia
              component="img"
              image={eatery.image_url}
              alt=""
              style={styles.img}
            />

            <div style={styles.textContainer}>
              <p style={{ marginBottom: "2%" }}>
                {eatery.city}, {eatery.state}
              </p>
              <p style={styles.title}>{eatery.name}</p>
              <div style={styles.ratingContainer}>
                <Rating value={eatery.rating} readOnly size="small" />
                <p style={{ color: "black" }}>({eatery.review_count})</p>
                <p
                  style={{
                    marginLeft: "3%",
                    color: "black",
                    fontSize: 12,
                    backgroundColor: "#ebebeb",
                    padding: 5,
                    borderRadius: 20,
                  }}
                >
                  {eatery.price}
                </p>
              </div>

              <p style={statusStyle}>{status}</p>
              <p style={styles.phone}>{eatery.phone}</p>
            </div>
          </div>

          <Tooltip title="Delete" placement="left">
            <IconButton
              onClick={handleDelete}
              sx={{ position: "absolute", right: 10, bottom: 8 }}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
