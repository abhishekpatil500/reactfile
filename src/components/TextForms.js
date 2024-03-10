import React , {useState} from 'react'


export default function TextForms(props) {

  const handleupclick=()=>{
    // console.log("uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleupclicks=()=>{
    // console.log("uppercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
  }

  const handleupchange=(event)=>{
    // console.log("on change");
    setText(event.target.value);
  }
  const [text,setText] = useState('enter text here3');
  //text= "new text";  wrong way to change the state
  // setText("new text"); correct way to change the state
  
  return (
    <>
    
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Example textarea</label> */}
          <textarea className="form-control" value= {text} onChange={handleupchange}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleupclicks}>convert to lowercase</button>
      </div>
       <div className="container my-3">
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length } words and {text.length} charaters

        </p>
        <p>{0.008 * text.split(" ").length}minutes reading time</p>
        <h2>preview</h2>
        <p>
          {text}
        </p>
       </div>
        
   
    </>
  )
}
