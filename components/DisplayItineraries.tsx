import ItineraryCard from "./ItineraryCard";

export default function DisplayItineraries({ itineraries, collection }: any) {
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
        <ItineraryCard
          key={index}
          itinerary={itinerary}
          collection={collection}
          href={{
            pathname: ROUTE_POST_ID,
            query: itinerary,
          }}
        />
      ))}
    </div>
  );
}
