import Head from "next/head";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const styles = {
    container: {
      width: "100%",
    },
    middle: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    centerText: {
      color: "#557A95",
      fontSize: 80,
      paddingLeft: "7%",
    },
    suitcases: {
      maxWidth: 500,
      objectFit: "contain" as "contain",
      maxHeight: 700,
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
      <div style={styles.middle}>
        <p style={styles.centerText}>
          Plan your next trip <br />
          All in one
        </p>
        <Image
          src="/camera.png"
          width={641}
          height={813}
          style={styles.suitcases}
          alt=""
        />
      </div>
    </>
  );
}
