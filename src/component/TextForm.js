import React, {useState} from "react";
import PropTypes from 'prop-types';
export default function TextForm(props) {
  const [text,setText] = useState('');
  const [text1,setText1] = useState('');
  
  const handleChange=(event)=>{
    console.log(setText(event.target.value));
    setText1(event.target.value);
  }
  const handleUpClick=()=>{
    console.log('Button Click Uppercase');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Convert to UpperCase','success');
  }
  const handleLowClick=()=>{
    console.log('Button Click Lowercase');
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Convert to LowerCase','success');
  }
 
  
  const handleClearClick=()=>{
    setText1(text);
    let newText = '';
    setText(newText);
    props.showAlert('Text is Cleared','success');
  }
  
  const handleReturnClick=()=>{
    console.log('Button Click Return');
    setText(text1);
    props.showAlert('Text Returned','success');
  }
  const handleCopyClick=()=>{
     let text = document.getElementById('myBox');
     text.select();
     navigator.clipboard.writeText(text.value);
     document.getSelection().removeAllRanges();
     props.showAlert('Text Copied','success');
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Extra space removed','success');
  }
  
  return (
    <>
    <div className="container my-4">
        <h2>{props.heading}</h2>
        <textarea className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'} `} id="myBox" value={text} onChange={handleChange} rows="8" style={{border:'2px solid'}} placeholder="Enter Text Here"></textarea>
        
        <div className="my-3">
        <button disabled={text.length===0} onClick={handleUpClick} className={`btn btn-${props.button} mx-1 my-1`}>Convert to Uppercase</button>
        <button disabled={text.length===0} onClick={handleLowClick} className={`btn btn-${props.button} mx-1 my-1`}>Convert to Lowercase</button>
        <button disabled={text.length===0} onClick={handleClearClick} className={`btn btn-${props.button} mx-1 my-1`}>Clear Text</button>
        <button  onClick={handleReturnClick} className={`btn btn-${props.button} mx-1 my-1`}>Return Text</button>
        <button disabled={text.length===0} onClick={handleCopyClick} className={`btn btn-${props.button} mx-1 my-1`}>Copy Text</button>
     
        <button disabled={text.length===0} onClick={handleExtraSpaces} className={`btn btn-${props.button} mx-1 my-1`}>Handle Extra Spaces</button>
        </div>
        </div>
    <div className="container">
      <h3>Text Summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} alphbet</p>
      <p>{0.008*text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes to read </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}

TextForm.propTypes ={
  button: PropTypes.string.isRequired
}
TextForm.defaultProps = {
  button:'primary'
};