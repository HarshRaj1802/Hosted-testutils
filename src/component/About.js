// import React, { useState } from 'react'
import React from 'react';

export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
//});
    // const [btnText,setBtnText]=useState('Enable Dark Mode');
    
    
    // const toggleStyle=()=>{
    //     if(myStyle.color==='black'){
    //     setMyStyle({
    //         color:'white',
    //         backgroundColor:'black'
    //     })
    //     setBtnText('Enable Light Mode');
    // }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText('Enable Dark Mode');
    //     }
    // }
    
  return (
    <>
    <div className='container'>
      <h1>About Us</h1>
    <div className='container my-3'>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.setStyle} text-${props.setStyle==='dark'?'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ border:`2px solid ${props.setStyle==='light'?'black':'white'}`}}>
        Text Utils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div className={`accordion-body bg-${props.setStyle} text-${props.setStyle==='dark'?'light':'dark'}`} style={{ border:`2px solid ${props.setStyle==='light'?'black':'white'}`}}>
        TextUtils is free to use website. You can use to edit your text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.setStyle} text-${props.setStyle==='dark'?'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ border:`2px solid ${props.setStyle==='light'?'black':'white'}`}}>
        Free to use 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${props.setStyle} text-${props.setStyle==='dark'?'light':'dark'}`} style={{ border:`2px solid ${props.setStyle==='light'?'black':'white'}`}}>
        It is a free to use website , also it is powerful tool to edit the entered text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.setStyle} text-${props.setStyle==='dark'?'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ border:`2px solid ${props.setStyle==='light'?'black':'white'}`}}>
        Browser Copmatiable 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className={`accordion-body bg-${props.setStyle} text-${props.setStyle==='dark'?'light':'dark'}`} style={{ border:`2px solid ${props.setStyle==='light'?"black":'white'}`}}>
        This TextUtils can be used in almost every browser like chrome,firefox,brave,opera etc.
      </div>
    </div>
  </div>
</div>
</div>
</div>
</>
)
 /* <button className='btn btn-primary my-3' onClick={toggleStyle}>{btnText}</button> 
  <div className={`accordion-button collapsed bg-${props.setStyle} text-${props.setStyle==='dark'?'light':'dark'}`} style={{myStyle, border:'2px solid orange'}}></div> */}