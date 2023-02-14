import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import EateriesSearch from "@/components/EateriesSearch";
import axios from "axios";
import DisplayEateries from "@/components/DisplayEateries";

export default function Eateries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  // add a sort by param!

  const searchApi = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`,
        {
          headers: {
            Authorization:
              "Bearer D6nyyyinTkA-V_iXl7ZcUIPu6jh8-Nes4VIeEAdIvWXPqgJllrul7E-11LB8M9BlfMHjreZ7oi6fPm7QkhkeuYGY0MBGVkyFwKG_j3F39xaA4ds_L-BpOnzGHWLkY3Yx",
          },
          params: {
            term: searchTerm,
            location: location,
            limit: 20,
          },
        }
      )
      .then((res) => {
        setResults(res.data.businesses);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    searchApi;
  }, [searchApi, searchTerm]);

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
          <p style={styles.title}>Eateries</p>
          <EateriesSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            location={location}
            setLocation={setLocation}
            onSubmit={searchApi}
          />
          <DisplayEateries results={results} setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </>
  );
}
