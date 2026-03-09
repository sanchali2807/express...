const express = require('express');
const router = express.Router();

let posts = [
    {id:1 , title:"post1"},
    {id:2 , title:"post2"},
    {id:3 , title:"post3"}
]

router.get('/',(req,res)=>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
        res.status(200).json(posts.slice(0,limit));
    }else{
        res.status(200).json(posts);
    }
})

//get a single post
router.get('/:id',(req,res)=>{
    // console.log(req.params.id);
    const id = parseInt(req.params.id);
    // res.json(posts[id-1]);
    // if we do this this statement is quite prone to error if there are any dis consistency in id number
    const post = posts.find((post)=>{
        return post.id === id;
    })
    if(!post){
        res.status(404).json({msg: `a post with the id of ${id} was not found`});
    }else{
        res.status(200).json(post);
    }
    // res.status(200).json(posts.filter((post)=>{
    //     return post.id === id;
    // }));
})

module.exports = router;