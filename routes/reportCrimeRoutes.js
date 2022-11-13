const express = require('express');
const About = require('../models/aboutmodel');
const Crime = require('../models/crimeModel');
const User = require('../models/userModel');
//const AppError = require('../utils/appError');
const router = express.Router();

router.get("/crime-alerts", (req,res)=>{
    console.log('Hello, alerting crimes report Crime Routes');
    res.status(200).render('crimealerts');
})

router.get("/report-crime", (req,res)=>{
    console.log('Hello, reporting crime reportCrimeRoutes');
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
    console.log("here",req.body);
    console.log("here",req.body.address);
    var gc      = new google.maps.Geocoder(),
        opts    = { 'address' : req.body.address };
        
        

    gc.geocode(opts, async function (results, status)
    {
        if (status == google.maps.GeocoderStatus.OK)
        {   
            var loc     = results[0].geometry.location,
                lat     = loc.$a,
                long    = loc.ab;
            var crimeObj = req.body;

            console.log(lat,long);
            crimeObj.location = [lat, long];
            console.log(crimeObj);
            const crime = await Crime.create(crimeObj);
            res.status(200).json({
                message:"Successfully added crime",
                body: crime
            })
        }
        else
        {
            res.status(400).json({
                message:"Could not find location"
            })
        }
    });

    
})

router.post("/about", async(req, res)=>{
    const about = await About.create(req.body);
    res.status(200).json({
        message:"Successfully added crime",
        body: about
    })
})

module.exports = router;