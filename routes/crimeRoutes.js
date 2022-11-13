const express = require('express');
const Crime = require('../models/crimeModel');
//const User = require('../models/userModel');
const About = require('../models/aboutmodel');
const CrimeAlert = require('../models/crimeAlertModel');
//const Patterns = require('../models/frequentpatternModel');

//const AppError = require('../utils/appError');
const router = express.Router();

router.get("/crime-alerts", async(req,res)=>{
    // const crimealerts= await CrimeAlert.find({});
    // console.log(crimealerts);
    // console.log('Hello, alerting crimes crime Routes');
    // res.status(200).render('crimealerts',{year2005:crimealerts[0],year2006:crimealerts[1],year2007:crimealerts[2],year2008:crimealerts[3]});
    // console.log(crimealerts);

    //for frequent patterns
    let Fpatterns=[];
    const patterns= await Patterns.find({});
    console.log(patterns);
    res.status(200).render('crimealerts', {Fpatterns:patterns});


})

router.get("/report-crime", (req,res)=>{
    console.log('Hello, reporting crime');
    res.status(200).render('reportCrime');
})

router.get("/view-crimes", async(req,res)=>{
    const data = await Crime.find({});
    let err = [];
    let arr = [];
    for(var i = 0; i < data.length; i++){
        err.push(data[i].location[0] + ";" + data[i].location[1]);
        arr.push(data[i].description);
    };
    console.log("Viewing crimes crimeRoutes");
    res.status(200).render("viewCrimes", {loc:err, des:arr});
})

router.get("/view-statistics", async(req, res)=>{
    console.log("Viewing stats");
    res.status(200).render("visualizations");
})

router.post("/report-crime", async(req, res)=>{
    var coordinates= req.body.location.split(",");
    req.body.location=coordinates;
    const crime = await Crime.create(req.body);
    res.status(200).json({
        message:"Successfully added crime",
        body: crime
    })
})

router.post("/write-query", async(req, res)=>{
    const about = await About.create(req.body);
    res.status(200).json({
        message:"Successfully added query...",
        body: about
    })
})

module.exports = router;