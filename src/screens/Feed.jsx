import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Sidebar, Videos } from "../components";
import { FetchFromApi } from "../utils/FetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ display: "flex", flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          padding: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box
        sx={{
          color: "#eee",
          px: 4,
          height: { sx: "auto", md: "92vh" },
          overflow: "auto",
        }}
      >
        <Typography sx={{ marginBottom: 2, marginTop: { xs: 2, md: 0 } }}>
          {selectedCategory}{" "}
          <span style={{ color: "#FC1503", fontWeight: "bold" }}>Videos</span>{" "}
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
