// import express from 'express';
const express = require('express');
const path = require('path');
const app = express();
//this app is basically used for everything 
const port = 8080;

//setup static folder -- is a middleware
// app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res)=>{
//     //  res.send('<h1>Hello world</h1>');
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })
// app.get('/about',(req,res)=>{
//     // res.send('this is about');
//     res.sendFile(path.join(__dirname,'public','about.html'));
// })
let posts = [
    {id:1 , title:"post1"},
    {id:2 , title:"post2"},
    {id:3 , title:"post3"}
]

app.get('/api/posts',(req,res)=>{
    res.json(posts);
})


app.listen(port,()=>{
    console.log(`server is running ${port}`);
}) 