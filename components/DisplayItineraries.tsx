import Link from "next/link";
import ItineraryCard from "./ItineraryCard";

export default function DisplayItineraries({ itineraries }: any) {
  const ROUTE_POST_ID = "itineraries/[id]";

  const styles = {
    container: {
      display: "flex",
      width: "95%",
      marginTop: "5%",
      flexWrap: "wrap" as "wrap",
      gap: "4%",
      paddingBottom: 80,
    },
  };

  return (
    <div style={styles.container}>
      {itineraries.map((itinerary: any, index: number) => (
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
