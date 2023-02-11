import ItemCard from "./ItemCard";
import { SetStateAction } from "react";

type InputProps = {
  results: any;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
};

type MapInputProps = {
  result: any;
  index: number;
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
        {results.map((result, index: number) => (
          <ItemCard key={index} result={result} setSearchTerm={setSearchTerm} />
        ))}
      </ul>
    </div>
  );
}
