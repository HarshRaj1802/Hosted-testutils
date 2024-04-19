import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} style={{borderBottom:`2px solid lightgrey`}}>
    <div className="container-fluid ">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home 
          </Link>
            {/* <Link className="nav-link active" aria-current="page" to="/">Home 
          </Link> */}
          </li> 
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About 
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutTitle}</Link>
          </li> */}
        </ul>
        {/* <div className='container1 mx-3'> */}
          {/* <button className='btn btn-success mx-1 ' >Green</button>
          <button className='btn btn-primary mx-3 px-3' >Blue</button> */}
          {/* <button className='btn-btn-success'>Green</button> */}
        {/* </div> */}

        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggle('primary')}} style={{height:'20px' ,width:'20px' , cursor:"pointer"}}></div></div>  

          <div className="d-flex">
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggle('warning')}} style={{height:'20px' ,width:'20px' , cursor:"pointer"}}></div></div> 

          <div className="d-flex">
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggle('success')}} style={{height:'20px' ,width:'20px' , cursor:"pointer"}}></div></div> 

          <div className="d-flex">
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggle('danger')}} style={{height:'20px' ,width:'20px' , cursor:"pointer"}} ></div></div> 

        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
        <input className={`form-check-input `} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggle(null)}}/>
        <label className={`form-check-label bg-${props.mode}`} htmlFor="flexSwitchCheckDefault" >Enable {props.mode==='light'?'dark':'light'} mode</label>
      </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : 'Set Title Here',
    aboutTitle : 'Set About Title Here'
};