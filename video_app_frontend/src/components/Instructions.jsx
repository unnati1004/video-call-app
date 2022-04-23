import React from 'react'

import { Typography } from '@mui/material';

export const Instructions = () => {
  return (
    <div  >
      <ul className="instructions" >
        <li>To initiate the video call you have to firstly enter your name.</li>

        <li> Click on the copy your ID button to copy id.</li>
        <li>
          You have to send the copied ID to the person you have to connect with.
        </li>
        <li>
          Then other person will paste the ID sent by you into the make a call
          section.
        </li>
        <li>
          Then the other person will click on call button and you will receive
          the call.
        </li>
      </ul>
    </div>
  );
}
