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








const Options = ({children}) => {



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
                <Button>
                  <Assignment fontSize="large" />
                </Button>
              
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
             
                {callaccepted && !callEnded ? (
                  <Button onClick={leavecall} className="opion_margin" >
                
                    <PhoneDisabled fontSize="large" /> 
                    Hang Up
                  </Button>
                ) : (
                  <Button onClick={()=>{calluser(idtocall)}} >call</Button>
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