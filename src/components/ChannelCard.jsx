import { CheckCircle } from "@mui/icons-material";
import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ item, itemId, marginTop }) => {
  console.log(itemId);
  const subscriberFormat = (subscriber) => {
    console.log("run", subscriber);
    if (subscriber > 1000 && subscriber < 1000000)
      return (subscriber / 1000).toFixed(0) + "k";
    else if (subscriber > 1000000 && subscriber < 1000000000)
      return (subscriber / 1000000).toFixed(0) + "M";
    else return subscriber;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ justifyContent: "center", marginTop: marginTop, height:"100%" }}
    >
      <Link to={`/channel/${itemId}`}>
        <CardMedia
          sx={{
            borderRadius: "50%",
            maxHeight: "180px",
            mb: 2,
          }}
          component="img"
          image={item && item.snippet.thumbnails.medium.url}
          alt={item && item.snippet.title}
        />
      </Link>
      <Typography
        variant="subtitle1"
        sx={{
          display: "flex",
          alginItems: "center",
          color: "#888",
        }}
      >
        {item && item.snippet.title}
        <CheckCircle
          sx={{
            fontSize: 14,
            color: "#084",
            display: "flex",
            alignItems: "center",
            paddingTop: 0.6,
            paddingLeft: 0.5,
          }}
        />
      </Typography>
      {item && item.statistics && (
        <Typography sx={{ color: "#777", marginBottom: 1 }}>
          {item && subscriberFormat(item.statistics.subscriberCount)}
          <span style={{ marginLeft: "4px" }}>Subscribers</span>
        </Typography>
      )}
    </Box>
  );
};

export default ChannelCard;
