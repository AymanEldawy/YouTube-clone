import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { VideoCard, Videos } from "../components";
import { FetchFromApi } from "../utils/FetchFromApi";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import ReplyIcon from "@mui/icons-material/Reply";
const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState();
  const [suggestionVideos, setSuggestionVideos] = useState();

  const [showMore, setShowMore] = useState(false);
  const viewsFormat = (views) => {
    if (views > 1000 && views < 1000000) return (views / 1000).toFixed(0) + "k";
    else if (views > 1000000 && views < 1000000000)
      return (views / 1000000).toFixed(0) + "M";
    else return views;
  };

  useEffect(() => {
    FetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetails(data.items[0]);
    });
    FetchFromApi(
      `search?relatedToVideoId=${id}&part=id,snippet,type=video`
    ).then((data) => {
      setSuggestionVideos(data.items);
    });
  }, [id]);

  if (!videoDetails) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle, description, publishedAt },
    statistics: { viewCount, likeCount },
  } = videoDetails;
  return (
    <Box height="95vh" sx={{ display: "flex", overflow: "auto" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ width: { xs: "100%", lg: "90%" }, mx: "auto" }}
      >
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Stack>
              <Typography variant="h5" color="#fff" fontWeight="bold" mt={1}>
                {title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="div" color="#eee">
                  {viewsFormat(viewCount)} Views{" "}
                  {new Date(publishedAt).toLocaleDateString("en-UK", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  <Typography>
                    {!showMore ? description.slice(0, 50) : description}{" "}
                    {!showMore && (
                      <Button
                        sx={{ color: "#fff" }}
                        onClick={() => setShowMore(!showMore)}
                      >
                        show more
                      </Button>
                    )}
                  </Typography>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#eee",
                  }}
                >
                  <Tooltip title="I like this" sx={{ color: "#eee" }}>
                    <IconButton size="small">
                      <ThumbUpIcon sx={{ mr: "5px", fontSize: "18px" }} />
                      {viewsFormat(likeCount)}
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="I dislike this" sx={{ color: "#eee" }}>
                    <IconButton size="small">
                      <ThumbDownIcon sx={{ mr: "5px", fontSize: "18px" }} />
                      Dislike
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share" sx={{ color: "#eee" }}>
                    <IconButton size="small">
                      <ReplyIcon sx={{ mr: "5px", fontSize: "18px" }} />
                      Share
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Stack direction="column" sx={{ p: 2 }}>
          {suggestionVideos &&
            suggestionVideos.map((item, index) => (
              <Box sx={{ minHeight: "380px", mb: 1, width: { md: "300px" } }}>
                <VideoCard item={item} key={index} />
              </Box>
            ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
