import './App.css';
  import About from './component/About';
// import Todo from './TodoList/Todo';
// import TodoCount from './TodoList/TodoCount';
import React, {useState} from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import { useState } from 'react';
import Alert from './component/Alert';

 import {
  BrowserRouter as Router,
   Routes,
   Route,
    // Link
} from "react-router-dom";
let button1;
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })


     setTimeout(() => {
      setAlert(null);
     },1500);
  }
  const removeBackgroundCLass=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-light');
  }
  
  const toggleMode=(cls)=>{
    
    removeBackgroundCLass();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      
      showAlert('Light mode is being enabled','success')
      document.title='TextUtils - Light Mode'

      // To change the title
      //  setInterval(() => {
      //    document.title='TextUtils - Light Mode'
      //  }, 2000);
      //  setInterval(() => {
      //    document.title='TextUtils is Amazing Mode'
      //  }, 1500);
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert('Dark mode is being enabled','success')
      document.title='TextUtils - Dark Mode'
    }
    if(cls==='primary'||cls==='success'||cls==='warning'||cls==='danger'){
      setMode('dark')
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert('Dark mode is being enabled','success')
      document.title='TextUtils - Dark Mode'
      if(cls==='primary'){
         button1='dark';
      }
      else{
        button1='primary'
      }
    }
    else{
      button1='primary'
    }
  }
  return (
    // <div>
    // <h1>Hello</h1>
    // <Todo></Todo>
    // <TodoCount></TodoCount>
    // </div>
    <>
     <Router>
    <Navbar title="TextUtils" aboutTitle="About TextUtils"  mode={mode} toggle={toggleMode} />
    <Alert alert={alert}/>
  
      <Routes>
          <Route exact path="/about" element={<About setStyle={mode} />}/> 
            
           <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} button={button1} />}/>
            
      </Routes>  
   {/* <About/>  */}
    </Router> 
   {/* <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/> */}
    </>
  );
}

export default App;
