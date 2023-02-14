import { useEffect, useState } from "react";
import SightsCard from "./SightsCard";

export default function DisplaySights({ results }) {
  const [resultsArray, setResultsArray] = useState([]);

  function compare(a, b) {
    if (a.user_ratings_total < b.user_ratings_total) {
      return 1;
    }
    if (a.user_ratings_total > b.user_ratings_total) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    if (results) {
      const temp = JSON.parse(results).results;
      temp.sort(compare);
      setResultsArray(temp);
    }
  }, [results]);

  const styles = {
    listContainer: {
      display: "flex",
      flexWrap: "wrap" as "wrap",
      justifyContent: "space-around",
    },
  };

  return (
    <div style={styles.listContainer}>
      {resultsArray.map((result, index: number) => (
        <SightsCard key={index} result={result} />
      ))}
    </div>
  );
}
