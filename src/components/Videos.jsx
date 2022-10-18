import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <Grid container spacing={2}>
      {videos.map((item, index) => (
        <Grid item sm={6} md={4} lg={3} xl={2.4} key={index}>
          {item.id.channelId && (
            <ChannelCard
              itemId={item.id.channelId}
              item={item}
              marginTop="0"
            />
          )}
          {item.id.videoId && <VideoCard item={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
