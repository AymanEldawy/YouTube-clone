import { Button, Paper, TextField, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${search}`);
  };
  return (
    <Paper
      onSubmit={handelSubmit}
      component="form"
      sx={{
        borderRadius: ".5rem",
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        ml: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ border: "none" }}
      />
      <IconButton sx={{ color: "red", padding: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
