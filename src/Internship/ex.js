const express=require('express');
const exp=express()
exp.use((req,res,next)=>{
    console.log('hello')
    if(req.query.age>18){
        res.send('Greater than 18')
    }else{
        next();
    }
})

exp.get('/mylocalhost',(req,res)=>{
    res.send('welcome to express')
})

// exp.get('/',(req,res)=>{
//     res.send("hello");
// })
// exp.get('/weather/jaipur',(req,res)=>{
//     res.send("Temperature:50");
// })
// exp.get('/weather/banglore',(req,res)=>{
//     res.send("Temperature:40");
// })



exp.listen(5000,()=>{
    console.log('server started at 5000')
})