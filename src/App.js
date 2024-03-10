
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';


function App() {
  return (
    <>
       <Navbar title="TextUtils" ></Navbar>
      <TextForms heading="Enter the text to analyzes"></TextForms>
   </>
  );
}

export default App;
