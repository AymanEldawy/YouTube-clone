import React from "react";
import { Box, Stack } from "@mui/material";
import { logo } from "../utils/utils";
import { SearchBar } from "../components";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{
      color: "#fff",
      padding: ".5rem",
      width: { xs: "100%", lg: "90%" },
      mx: "auto",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="youtube logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
