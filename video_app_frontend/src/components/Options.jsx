import React, { useContext, useState } from 'react'

import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";

import{CopyToClipboard} from "react-copy-to-clipboard"

import{Assignment,Phone,PhoneDisabled} from "@mui/icons-material" 

 import{SocketContext} from "../SocketContext";

 import { makeStyles } from '@mui/styles';

 const usestyles = makeStyles({
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
     width: "600px",
     margin: "35px 0",
     padding: 0,
    //  [theme.breakpoints.down("xs")]: {
    //    width: "80%",
    //  },
   },
   margin: {
     marginTop: 20,
   },
   padding: {
     padding: 20,
   },
   paper: {
     padding: "10px 20px",
     border: "2px solid black",
   },
 });








const Options = ({children}) => {

  const classes=usestyles() 



  const {me,callAccepted,name,setname,callEnded,leavecall,calluser} =useContext(SocketContext)

  const [idtocall,setidtocall]=useState("")




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
              <CopyToClipboard text={me} className={classes.margin}>
                <Button variant="contained" fullWidth>
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
              {console.log(callAccepted, callEnded)}
              {callAccepted && !callEnded ? (
                <Button
                  onClick={leavecall}
                  variant="contained"
                  className={classes.margin}

                  fullWidth

                >
                  <PhoneDisabled fontSize="large" />
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" onClick={() => calluser(idtocall)} fullWidth >
                  <Phone fontSize="large" /> call
                </Button>
              )}

              {/* <button>
                  <Assignment fontSize="large" />
                </button> */}
              {/* <Button
                  // variant="contained"
                  // color="primmary"
                  // fullWidth
                  staeIcons={<Assignment fontSize="large" />}
                ></Button> */}
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