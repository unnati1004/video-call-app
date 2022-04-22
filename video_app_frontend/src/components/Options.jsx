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

import { makeStyles } from '@mui/styles';


import{SocketContext} from "../SocketContext";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  container: {
    width: "600px",
    margin: "35px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
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
}));

const Options = ({children}) => {

  // const classes=useStyles()

  const {me,callaccepted,name,setname,callEnded,leavecall,calluser} =useContext(SocketContext)

  const [idtocall,setidtocall]=useState("")




  return (
    <Container className="option_Container">
      <Paper elevation={10} className="option_Paper">
        <form className="option_root" noValidate autoComplete="off">
          <Grid container className="option_gridContainer">
            <Grid item xs={12} md={6} className="option_padding">
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={me} className="option_margin">
                <button>
                  <Assignment fontSize="large" />
                </button>
                {/* <Button
                  // variant="contained"
                  // color="primmary"
                  // fullWidth
                  staeIcons={<Assignment fontSize="large" />}
                ></Button> */}
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className="option_padding">
              <Typography gutterBottom variant="h6">
                Make a Call
              </Typography>
              <TextField
                label="ID to call"
                value={idtocall}
                onChange={(e) => setidtocall(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={me} className="option_margin">
                {callaccepted && !callEnded ? (
                  <button onClick={leavecall} className="opion_margin" >
                
                    <PhoneDisabled fontSize="large" /> 
                    Hang Up
                  </button>
                ) : (
                  <button onClick={()=>{calluser(idtocall)}} >call</button>
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
              </CopyToClipboard>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>

    // <div>{children}</div>
  );
}

export default Options