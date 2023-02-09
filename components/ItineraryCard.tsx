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

export default function ItineraryCard({ itinerary }) {
  const dates: string[] = [];
  function getDates() {
    itinerary.dates.map((date: string) => dates.push(date));
  }
  itinerary.dates ? getDates() : null;

  console.log(dates);

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

  return (
    <Card
      sx={{
        width: 276,
        marginBottom: "3%",
        borderRadius: 4,
        boxShadow: 5,
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(77, 80, 83, 1)), url(${itinerary.image})`,
        height: 276,
        backgroundSize: "cover",
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
