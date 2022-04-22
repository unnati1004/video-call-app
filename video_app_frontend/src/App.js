import logo from './logo.svg';
import './App.css';
import {AppBar, Typography} from '@mui/material'
import Videoplayer from './components/Videoplayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import { makeStyles } from '@mui/styles';


const useStyles=makeStyles((theme) =>({
 

 

}))


const App=()=> {

  //  const classes=useStyles()



  return (
    <div className="wrapper App"> 

    <AppBar className="appBar" >
      <Typography variant='h2'>
        Video chat
      </Typography>

      <Videoplayer />

      <Options>
        <Notifications/>
      </Options>

    </AppBar>


     
    </div>
  );
}

export default App;
