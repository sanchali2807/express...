// import express from 'express';
const express = require('express');
const app = express();
//this app is basically used for everything 
const port = 8080;

app.get('/',(req,res)=>{
     res.send('hello world');
})


app.listen(port,()=>{
    console.log(`server is running ${port}`);
})