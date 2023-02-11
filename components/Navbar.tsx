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
    name: "Eateries",
    path: "/eateries",
  },
  {
    name: "Sights",
    path: "/sights",
  },
  {
    name: "Itineraries",
    path: "/itineraries",
  },
];

const styles = {
  option: {
    fontFamily: "Optima",
    margin: "12%",
    fontSize: 20,
    color: "#557A95",
  },
};

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: 4,
        marginLeft: "2%",
        marginBottom: "3%",
      }}
    >
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
