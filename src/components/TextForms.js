import React , {useState} from 'react'


export default function TextForms(props) {

  const handleupclick=()=>{
    // console.log("uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success");
  }

  const handleupclicks=()=>{
    // console.log("uppercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase","success");
  }

  const handleupclear=()=>{
    // console.log("uppercase was clicked" + text);
    let newText="";
    setText(newText)
    props.showAlert("cleared","success");
  }

  const handleupchange=(event)=>{
    // console.log("on change");
    setText(event.target.value);
  }
  const [text,setText] = useState('');
  //text= "new text";  wrong way to change the state
  // setText("new text"); correct way to change the state
  
  return (
    <>
    
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Example textarea</label> */}
          <textarea className="form-control" value= {text} onChange={handleupchange}id="myBox"  style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'grey':'white'}}rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleupclick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleupclicks}>convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleupclear}>convert to clear</button>
      </div>
       <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length } words and {text.length} charaters

        </p>
        <p>{0.008 * text.split(" ").length}minutes reading time</p>
        <h2>preview</h2>
        <p>
          {text.length>0?text:"enter something to preview"}
        </p>
       </div>
        
   
    </>
  )
}
