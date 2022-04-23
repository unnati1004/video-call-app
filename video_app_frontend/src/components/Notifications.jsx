import { Button } from '@mui/material';
import React, { useContext } from 'react'

import { SocketContext } from "../SocketContext";


const Notifications = () => {

 const {answercall,call,callAccepted }=useContext(SocketContext)


  return (
    <>
      {call.isRecievedCall && !callAccepted && (
        <div
          styles={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <h1> {call.name ? call.name : "Somone"} is calling</h1>

          <Button variant="contained" onClick={answercall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
}

export default Notifications