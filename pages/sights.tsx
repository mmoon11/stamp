import Head from "next/head";
import Navbar from "@/components/Navbar";
import SightsSearch from "@/components/SightsSearch";
import DisplaySights from "@/components/DisplaySights";
import { useState } from "react";

export default function Sights() {
  const [results, setResults] = useState<any>();

  const styles = {
    outerContainer: {
      display: "flex",
      justifyContent: "center",
    },
    container: {
      display: "flex",
      width: "90%",
      flexDirection: "column" as "column",
      alignItems: "center",
    },
    title: {
      fontSize: 40,
      width: "100%",
    },
  };

  return (
    <>
      <Head>
        <title>Stamp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div style={styles.outerContainer}>
        <div style={styles.container}>
          <p style={styles.title}>Sights</p>
          <SightsSearch results={results} setResults={setResults} />
          <DisplaySights results={results} />
        </div>
      </div>
    </>
  );
}