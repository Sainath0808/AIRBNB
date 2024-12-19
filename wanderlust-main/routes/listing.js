const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
// const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner,validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer = require('multer');
const {storage}=require('../cloudConfig.js');
const upload =  multer({ storage });

//Index Route
//Create Route
router.route('/')
.get(wrapAsync(listingController.index ))        //code jump to controllers/listing.js
.post(isLoggedIn,
 upload.single("listing[image]"),
 validateListing,
  wrapAsync(listingController.createListing));                   //Image Link
// .post(upload.single("listing[image]") ,(req,res)=>{
//     res.send(req.file);                                                                 //Image uploading
// });

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Show Route
//Update Route
//Delete Route
router.route('/:id')
.get( wrapAsync(listingController.ShowListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));
  
//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));


module.exports=router;