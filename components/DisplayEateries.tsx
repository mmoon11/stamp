import ItemCard from "./ItemCard";
import { List, ListItem } from "@mui/material";
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
      width: "100%",
      justifyContent: "center",
    },
    listContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
  };

  return (
    <div style={styles.container}>
      <ul style={styles.listContainer}>
        {results.map((result, index) => (
          <ItemCard key={index} result={result} setSearchTerm={setSearchTerm} />
        ))}
      </ul>
    </div>
  );
}
