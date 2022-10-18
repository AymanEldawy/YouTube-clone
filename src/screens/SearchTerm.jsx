import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "../components";
import { FetchFromApi } from "../utils/FetchFromApi";

const SearchTerm = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box
      sx={{
        color: "#eee",
        px: 4,
        height: { sx: "auto", md: "92vh" },
        overflow: "auto",
      }}
    >
      <Typography sx={{ marginBottom: 2 }}>
        Result search for
        <span
          style={{
            color: "#FC1503",
            fontWeight: "bold",
            marginRight: "5px",
            marginLeft: "5px",
            textTransform: "capitalize",
          }}
        >
          {searchTerm}
        </span>{" "}
        Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchTerm;
