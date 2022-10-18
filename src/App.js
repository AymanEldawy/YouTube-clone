import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Feed,
  ChannelDetails,
  VideoDetails,
  SearchTerm,
} from "./screens";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="search/:searchTerm" element={<SearchTerm />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
