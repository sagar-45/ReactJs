import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Formtext from './components/Formtext';
import About from './components/About';
import react,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,ChangeMode]=useState('light');
  const [alert,setAlert]=useState('');
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert('')
    },2000)
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      ChangeMode('light');
      document.body.style.backgroundColor='#fff';
      showAlert("Light mode Enble",'success');
    }
    else{
      ChangeMode('dark');
      document.body.style.backgroundColor='#1122ee';
      showAlert("Dark mode Enble",'success');
    }
  } 
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Formtext heading="Enter text below" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
