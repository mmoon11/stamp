import ItemCard from "./ItemCard";
import { SetStateAction } from "react";
import { Result, Results } from "@/types/types";

type InputProps = {
  results: Results;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
};

export default function DisplayEateries({
  results,
  setSearchTerm,
}: InputProps) {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
    },
    listContainer: {
      display: "flex",
      flexWrap: "wrap" as "wrap",
      justifyContent: "space-around",
    },
  };

  return (
    <div style={styles.container}>
      <ul style={styles.listContainer}>
        {results.map((result: Result, index: number) => (
          <ItemCard key={index} result={result} setSearchTerm={setSearchTerm} />
        ))}
      </ul>
    </div>
  );
}
