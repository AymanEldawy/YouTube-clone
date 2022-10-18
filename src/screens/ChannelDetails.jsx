import { Container, Paper } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChannelCard, VideoCard, Videos } from "../components";
import { FetchFromApi } from "../utils/FetchFromApi";

const ChannelDetails = () => {
  let { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelVideos, setChannelVideos] = useState(null);

  useEffect(() => {
    FetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data.items[0])
    );

    FetchFromApi(
      `search?channelId=${id}&part=snippet&order=date`
    ).then((data) => setChannelVideos(data.items));
  }, [id]);
  console.log(channelDetails, channelVideos);
  return (
    <Box component="div" sx={{ background: "#111" }}>
      <Paper
        component="div"
        style={{
          height: "300px",
          backgroundImage: "linear-gradient(to right, #9c27b0, #f44336)",
        }}
      />
      <ChannelCard
        item={channelDetails}
        itemId={channelDetails && channelDetails.id}
        marginTop="-90px"
      />
      <Container sx={{ mt: 2}}>
        {channelVideos && <Videos videos={channelVideos} />}
      </Container>
    </Box>
  );
};

export default ChannelDetails;
