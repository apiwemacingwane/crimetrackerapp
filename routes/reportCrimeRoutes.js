const express = require('express');
const About = require('../models/aboutmodel');
const Crime = require('../models/crimeModel');
const User = require('../models/userModel');
//const AppError = require('../utils/appError');
const router = express.Router();

router.get("/crime-alerts", (req,res)=>{
    console.log('Hello, alerting crimes');
    res.status(200).render('crimealerts');
})

router.get("/report-crime", (req,res)=>{
    console.log('Hello, reporting crime');
    res.status(200).render('reportCrime');
})

router.get("/view-crimes", async(req,res)=>{
    console.log("Viewing crimes");
    res.status(200).render("viewCrimes");
})

router.get("/view-statistics", async(req, res)=>{
    console.log("Viewing stats");
    res.status(200).render("visualizations");
})

router.post("/report-crime", async(req, res)=>{
    const crime = await Crime.create(req.body);
    res.status(200).json({
        message:"Successfully added crime",
        body: crime
    })
})

router.post("/about", async(req, res)=>{
    const about = await About.create(req.body);
    res.status(200).json({
        message:"Successfully added crime",
        body: about
    })
})

module.exports = router;