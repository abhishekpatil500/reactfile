
import './App.css';
import Alert from './components/Alert';

// import Abouts from './components/Abouts';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react';


function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not it show
   const [alert,setAlert]=useState(null);

// const showAlert=(message,type)=>{
//   setAlert({
//     msg: message,
//     type: type
//   })
//   setTimeout(()=>{
//     setAlert(null);
//   },3000)
// }

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type.toLowerCase() // Convert type to lowercase
  });
  setTimeout(() => {
    setAlert(null);
  }, 3000);
};

  const togglemode =()=>{
    if(mode==="light")
    {
      setMode("dark");
     
      document.body.style.backgroundColor ="#042743"
      
      showAlert("dark mode has been enabled","Success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor ="#e5eaf5"
      showAlert("light mode has been enabled","success");
    }

  } 
  return (
    <>
         
       <Navbar title="TextUtils" mode={mode} togglemode={togglemode}></Navbar> 
       <Alert alert={alert}></Alert>
       <TextForms  showAlert={showAlert}heading="Enter the text to analyzes" mode={mode}></TextForms>
        {/* <Abouts></Abouts> */}
    
 
   </>
  );
}

export default App;
