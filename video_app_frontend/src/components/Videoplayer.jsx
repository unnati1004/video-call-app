import { Grid, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";


const Videoplayer = () => {
  const { name, callaccepted, my_video, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <Grid container className="container_grid">
      {stream && (
        <Paper className="">
          <Grid items xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "name"}
            </Typography>
            <video
              playsInline
              muted
              ref={my_video}
              autoPlay
              className="my_video"
            />
          </Grid>
        </Paper>
      )}







      {callaccepted && !callEnded && (
        <Paper className="">
          <Grid items xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "name"}{" "}
            </Typography>
            <video
              playsInline
              muted
              ref={userVideo}
              autoPlay
              className="my_video"
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default Videoplayer;
