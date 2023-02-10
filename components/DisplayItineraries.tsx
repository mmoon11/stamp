import Link from "next/link";
import ItineraryCard from "./ItineraryCard";

export default function DisplayItineraries({ itineraries }: any) {
  const ROUTE_POST_ID = "itineraries/[id]";

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
      {itineraries.map((itinerary: any, index: string) => (
        <Link
          key={index}
          href={{
            pathname: ROUTE_POST_ID,
            query: itinerary,
          }}
        >
          <ItineraryCard itinerary={itinerary} />
        </Link>
      ))}
    </div>
  );
}
