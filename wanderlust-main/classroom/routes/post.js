const express =require("express");
const router =expess.Router();

//Index 
router.get("/",(req,res)=>{
    res.send("GET for post");
});
//Show 
router.get("/:id",(req,res)=>{
    res.send("GET for show post");
});
//post
router.post("/",(req,res)=>{
    res.send("POST  for post");
});
//Delete 
router.delete("/:id",(req,res)=>{
    res.send("Delete for post id");
});

module.exports = router;