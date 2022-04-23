import React, { useContext, useState } from 'react'

import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";

import { CopyToClipboard } from "react-copy-to-clipboard"

import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material"

import { SocketContext } from "../SocketContext";

import { makeStyles } from '@mui/styles';

const usestyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    //  [theme.breakpoints.down("xs")]: {
    //    flexDirection: "column",
    //  },
  },
  container: {
    width: "80%",
    margin: "35px 0",
    padding: 0,
    borderRadius: "10px"
    //  [theme.breakpoints.down("xs")]: {
    //    width: "80%",
    //  },
  },
  margin: {

    // margin: '20 auto 0',
    marginTop: '20px',
    // alignSelf:"center",

  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: "10px 20px",
    border: "1px solid #0d0d0d47",
  }
}));

const Options = ({ children }) => {

  const classes = usestyles();

  const { me, callAccepted, name, setname, callEnded, leavecall, calluser } = useContext(SocketContext)

  const [idtocall, setidtocall] = useState("");

  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                fullWidth
              />

              <CopyToClipboard text={me}>
                <Button
                  variant="contained"
                  // className='option-btn'
                  className={classes.margin}
                >
                  <Assignment fontSize="large" />
                  copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>

            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Make a Call
              </Typography>
              <TextField
                label="ID to call"
                value={idtocall}
                onChange={(e) => setidtocall(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Button
                  color="warning"
                  onClick={leavecall}
                  variant="contained"
                  className={classes.margin}
                >
                  <PhoneDisabled fontSize="large" />
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className={classes.margin}
                  onClick={() => calluser(idtocall)}
                >
                  <Phone fontSize="large" /> call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>

    // <div>{children}</div>
  );
}

export default Options