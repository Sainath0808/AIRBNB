const express =require("express");
const router =expess.Router();


//Index users
router.get("/",(req,res)=>{
    res.send("GET for user");
});
//Show  users
router.get("/:id",(req,res)=>{
    res.send("GET for show user");
});
//post users
router.post("/",(req,res)=>{
    res.send("POST  for user");
});
//Delete users
router.delete("/:id",(req,res)=>{
    res.send("Delete for user id");
});

module.exports = router;