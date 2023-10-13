const express = require("express");
const locationModel=require("../Models/locationModel");
const validate=require("../validation/ValidateLocation");
const ValidateLatitudesLongitudes=require("../validation/ValidateLatitudesLongitudes");
const distanceMeter=require("../helpers/distance-meter");

exports.get_all_data=async function(req,res){
    const locations= await locationModel.find();
    res.send(locations);
};

exports.get_one_data=async function(req,res){
    const id=req.params.id;
    const location= await locationModel.findById(id);
    if(!location){
        return res.status(404).send("There is no location! Wrong Id!");
    }
    res.send(location);
};

exports.post_data=async function(req,res){

    console.log(req.body);
    const {error}=validate.ValidateLocation(req.body);
    
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const loc=new locationModel({
        locationLatitude:req.body.locationLatitude,
        locationLongitude:req.body.locationLongitude,
        locationTitle:req.body.locationTitle,
        colorOfMark:req.body.colorOfMark
    });
    
    try{
        const result=await loc.save();
        res.send(result);
    }
    catch(err){
        console.log(err);
    }
};

exports.put_data=async function(req,res){

    const id=req.params.id;
    const location = await locationModel.findById(id);

    if(!location){
        return res.status(404).send("There is no location! Wrong Id!");
    }

    const {error} = validate.ValidateLocation(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }
    
    location.locationLatitude = req.body.locationLatitude;
    location.locationLongitude = req.body.locationLongitude,
    location.locationTitle = req.body.locationTitle,
    location.colorOfMark = req.body.colorOfMark

    try{
        const result=await location.save();
        res.send(result);
    }
    catch(err){
        console.log(err);
    }
};

exports.post_distance=async function(req,res){

    const {error}=ValidateLatitudesLongitudes.validateSourceLatitudesLongitudes(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const locations= await locationModel.find();
    if(!locations){
        return res.status(400).send("There is no location!");
    }

    const routes=distanceMeter(req.body,locations);

    
    res.send("başarılı");

};