import React from "react";
// import axios form 'axios';

const Rapidapi = () =>{
   const url= 'https://forecast9.p.rapidapi.com/rapidapi/forecast/Berlin/summary/';
const options = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': 'b120abf315msh575e09d5138b3cdp17cc7fjsnc53e9dea89ca',
    'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
  }
};
function handleClick(){
    console.log('hlo')
    axios.get(url,options)
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log(error);
    });
}
return 

}