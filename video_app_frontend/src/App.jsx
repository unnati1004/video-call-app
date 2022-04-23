import "./App.css";
import { AppBar, Typography } from "@mui/material";
import Videoplayer from "./components/Videoplayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

import { Instructions } from "./components/Instructions";

const App = () => {
  return (
    <div>
      <AppBar className="appBar" position="static">
        <Typography variant="h3">MIRROR VIDEO CALL</Typography>
      </AppBar>

      <div className="wrapper">
        <Videoplayer />
        <Options>
          <Notifications />
        </Options>
        <Typography variant="h5" color="#1c1c1ca2">
          Instructions:{" "}
        </Typography>

        <Instructions/>
      </div>
    </div>
  );
};

export default App;
