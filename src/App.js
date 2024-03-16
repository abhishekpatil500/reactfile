
import './App.css';

import Abouts from './components/Abouts';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// let mystyle={
//   color:'white',
//   backgroundColor:'black'
// }

function App() {
  return (
    <>
         
       <Navbar title="TextUtils" ></Navbar> 
       <TextForms heading="Enter the text to analyzes"></TextForms>
        <Abouts></Abouts>
    
 
   </>
  );
}

export default App;
