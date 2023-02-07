import React from "react";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import { setSyntheticLeadingComments } from "typescript";

type NavLink = {
  name: string;
  path: string;
};

const navData: NavLink[] = [
  {
    name: "Flights",
    path: "/flights",
  },
  {
    name: "Hotels",
    path: "/",
  },
  {
    name: "Sightseeing",
    path: "/",
  },
  {
    name: "Eateries",
    path: "/",
  },
  {
    name: "Itineraries",
    path: "/",
  },
];

const styles = {
  option: {
    fontFamily: "Optima",
    margin: "5%",
    fontSize: 20,
    color: "#557A95",
  },
};

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
      <nav>
        {navData.map(({ name, path }) => (
          <Link key={path} href={path} style={styles.option}>
            {name}
          </Link>
        ))}
      </nav>
    </Box>
  );
};

export default Navbar;
