import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { categories } from "../utils/utils";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        height: { xs: "auto", md: "95vh" },
        overflowX: "auto",
        maxWidth: "100%",
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => {
            setSelectedCategory(category.name);
          }}
          key={category.name}
          className="category-btn"
          style={{
            backgroundColor: selectedCategory === category.name && "#FC1503",
            color: "#fff",
          }}
        >
          <span
            style={{
              color: selectedCategory !== category.name && "#FC1503",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              whiteSpace: "nowrap",
              opacity: selectedCategory !== category.name && 0.5,
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
