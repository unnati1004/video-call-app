import './App.css';
import {AppBar, Typography} from '@mui/material'
import Videoplayer from './components/Videoplayer';
import Options from './components/Options';
import Notifications from './components/Notifications';






const App=()=> {




  return (
    <div className="wrapper App"> 

    <AppBar className="appBar" >
      <Typography variant='h2'>
         Video chat 
      </Typography>

    </AppBar>


      <Videoplayer />

      <Options>

        <Notifications/>

      </Options>


     
    </div>
  );
}

export default App;
