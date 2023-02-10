import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Link,
  Rating,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";

export default function ItineraryCard({ itinerary }) {
  const dates: string[] = [];
  function getDates() {
    itinerary.dates.map((date: string) => dates.push(date));
  }
  itinerary.dates ? getDates() : null;

  const styles = {
    title: {
      color: "white",
      fontSize: 32,
    },
    infoContainer: {
      display: "flex",
      flexDirection: "column",
    },
    dates: {
      color: "white",
      fontSize: 16,
    },
  };

  console.log(itinerary);

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
            {dates.length > 0 ? (
              <p style={styles.dates}>
                {dates[0]} - {dates[1]}
              </p>
            ) : null}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
