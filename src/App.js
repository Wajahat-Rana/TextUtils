import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import TextBox from './components/textBox.js'
import React,{useState} from 'react';
import Alert from './components/alert.js'
//Importing React Router Setup
import {
  BrowserRouter,Route,Routes
} from "react-router-dom";
import About from './components/About.js';

let heading = 'Welcome to my app';

function App() {

  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState('Dark Mode')
  const [alert, setAlert] = useState(null);

  const showAlert = (type,message)=>{
    setAlert({
      type : type,
      message : message 
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      setModeText('Light Mode')
      document.body.style.backgroundColor = 'gray'
      showAlert('success','Dark Mode Enabled.')
      document.title = 'TextUtils -Dark'
    }
    else{
      setMode('light')
      setModeText('Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert('success','Light Mode Enabled.')
      document.title = 'TextUtils -Light'
      // setInterval(() => {
      // document.title = 'Hey'
      // }, 1000);
      // setInterval(() => {
      // document.title = '!!!'
      // }, 800);
    }
  }


  return (
    <>
       <Navbar mode = {mode} toggleMode={toggleMode} modeText = {modeText}/>,
       <TextBox mode = {mode} showAlert = {showAlert}/>
       <Alert alert = {alert} />
       </>

    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<>
    //   <Navbar mode = {mode} toggleMode={toggleMode} modeText = {modeText}/>,
    //   <TextBox mode = {mode} showAlert = {showAlert}/>
    //   <Alert alert = {alert} />
    //   </>}>
    //   </Route>
    //   <Route path='/about' element={<About/>}>
    //   </Route>
    // </Routes>
    // { <div className="heading">
    // {heading}
    // </div> }
    // { <Navbar title = "Text Utils"/> }
    // { <button>Hello</button> }
    // </BrowserRouter>
  );
}

export default App;
