
import './App.css';

// import Abouts from './components/Abouts';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react';


function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not it show
   const togglemode =()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor ="grey"
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor ="white"
    }

  } 
  return (
    <>
         
       <Navbar title="TextUtils" mode={mode} togglemode={togglemode}></Navbar> 
       <TextForms heading="Enter the text to analyzes" mode={mode}></TextForms>
        {/* <Abouts></Abouts> */}
    
 
   </>
  );
}

export default App;
