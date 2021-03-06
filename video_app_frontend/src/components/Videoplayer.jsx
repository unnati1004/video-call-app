import { Grid, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";


const Videoplayer = () => {
  const { name, callAccepted,myVideo, userVideo, callEnded, stream, call } =useContext(SocketContext);

  return (
    <>
      <Grid container className="container_grid">
        {stream && (
          <Grid items xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "name"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="my_video"
            />
          </Grid>
        )}

        {callAccepted && !callEnded && (
          <Grid items xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "name"}
            </Typography>
            <video
              playsInline
              // muted
              ref={userVideo}
              autoPlay
              className="my_video"
            />
          </Grid>
        )}
      </Grid>

      
    </>
  );
};

export default Videoplayer;
