import './App.css';
import { AppBar, Typography } from '@mui/material'
import Videoplayer from './components/Videoplayer';
import Options from './components/Options';
import Notifications from './components/Notifications';






const App = () => {


  return (<div>

    <AppBar className="appBar" position='static'>
      <Typography variant='h2'>
        Video chat
      </Typography>
    </AppBar>

    <div className="wrapper">
      <Videoplayer />
      <Options>
        <Notifications />
      </Options>
    </div>
    
  </div>
  );
}

export default App;
