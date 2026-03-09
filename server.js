// import express from 'express';
const express = require('express');
const path = require('path');
const app = express();
//this app is basically used for everything 
const port = process.env.PORT||8000 ;

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

//get all posts
app.get('/api/posts',(req,res)=>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
        res.json(posts.slice(0,limit));
    }else{
        res.json(posts);
    }
})

//get a single post
app.get('/api/posts/:id',(req,res)=>{
    // console.log(req.params.id);
    const id = parseInt(req.params.id);
    // res.json(posts[id-1]);
    // if we do this this statement is quite prone to error if there are any dis consistency in id number
    
    res.json(posts.filter((post)=>{
        return post.id === id;
    }));
})

app.listen(port,()=>{
    console.log(`server is running ${port}`);
}) 