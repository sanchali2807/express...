// import express from 'express';
const express = require('express');
const app = express();
//this app is basically used for everything 
const port = 8080;

app.get('/',(req,res)=>{
     res.send('<h1>Hello world</h1>');
})
app.get('/about',(req,res)=>{
    res.send('this is about');
})

app.listen(port,()=>{
    console.log(`server is running ${port}`);
}) 