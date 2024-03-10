import React , {useState} from 'react'


export default function TextForms(props) {

  const handleupclick=()=>{
    // console.log("uppercase was clicked" + text);
    let newText=text.toUpperCase();
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
    <div>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Example textarea</label> */}
          <textarea className="form-control" value= {text} onChange={handleupchange}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>convert to uppercase</button>
      </div>
      
        
    </div>
  )
}
