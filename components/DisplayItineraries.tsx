import ItineraryCard from "./ItineraryCard";

export default function DisplayItineraries({ itineraries }) {
  const styles = {
    container: {
      display: "flex",
      width: "95%",
      marginTop: "5%",
      flexWrap: "wrap",
      gap: "4%",
    },
  };
  return (
    <div style={styles.container}>
      {itineraries.map((itinerary, index) => (
        <ItineraryCard key={index} itinerary={itinerary} />
      ))}
    </div>
  );
}
