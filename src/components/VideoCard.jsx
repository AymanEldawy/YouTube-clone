import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  item: {
    id: { videoId },
    snippet,
  },
}) => {
  const demoVideoUrl = "/";
  return (
    <Card
      sx={{
        background: "#222121",
        borderRadius: ".25rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        marginBottom: 1.5,
        height:{ md: "370px" }
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={snippet.thumbnails.medium.url}
          sx={{ height: "200px", objectFit: "cover" }}
          alt={snippet.title}
        />
      </Link>
      <CardContent sx={{ padding: "1rem" }}>
        <Typography sx={{ fontSize: 18 }} color="text.white" gutterBottom>
          {snippet.title.slice(0, 60)}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ marginBottom: 1, display: "flex", alginItems: "center", color: "#888" }}
        >
          {snippet.channelTitle}{" "}
          <CheckCircle
            sx={{
              fontSize: 14,
              color: "#084",
              display: "flex",
              alignItems: "center",
              paddingTop: 0.6,
              paddingLeft: 0.5
            }}
          />
        </Typography>
        {/* <Typography sx={{ fontSize: 13 }} variant="body-2">
          {snippet.description.slice(0, 100)}
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default VideoCard;
