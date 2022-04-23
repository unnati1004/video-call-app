import { Button } from '@mui/material';
import React, { useContext } from 'react'

import { SocketContext } from "../SocketContext";


const Notifications = () => {

 const {answercall,call,callAccepted }=useContext(SocketContext)


  return (
    
      <>
        {call.isRecievedCall && !callAccepted && (
          <div styles={{ display: "flex", justifyContent: "center" }}>
            <h1> {call.name} is calling </h1>


            <Button onClick={answercall}>Answer</Button> 
          </div>
        )}
      </>
   
  );
}

export default Notifications