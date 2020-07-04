
const Bootcamp = require('../models/Bootcamp');

/**
 * @desc          Get all the bootcamps
 * @route         GET  /api/V1/bootcamps
 * @access        Public
**/
exports.getBootcamps = async ( req, res, next ) => {
    try {
       const bootcamp = await Bootcamp.find();
       res.status(200).json({ sucess: true, count: bootcamp.length, msg: `Fetched all Bootcamp Sucessfully`, data: bootcamp });
   } catch (error) {
       res.status(400).json({ sucess: false, msg: error });
   }
};

/**
 * @desc          Get single bootcamp
 * @route         GET  /api/V1/bootcamp/:id
 * @access        Public
**/
exports.getBootcamp = async( req, res, next ) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) {
            return res.status(400).json({ sucess: false, msg: `Couldn't find Bootcamp with id:${req.params.id}.`});
        }
        res.status(200).json({ sucess: true, msg: `Fetched Bootcamp with id:${req.params.id} Sucessfully`, data: bootcamp });
    } catch (error) {
        res.status(400).json({ sucess: false, msg: error });
    }
};

/**
 * @desc          Create the bootcamp
 * @route         POST  /api/V1/bootcamp
 * @access        Private
**/
exports.createBootcamp = async ( req, res, next ) => {
   try {
       const bootcamp = await Bootcamp.create(req.body);
       res.status(201).json({ sucess: true, msg: `Create Bootcamp Sucessfully`, data: bootcamp });
   } catch (error) {
       res.status(400).json({ sucess: false, msg: error });
   }
};

/**
 * @desc          Create the bootcamp
 * @route         PUT  /api/V1/bootcamps/:id
 * @access        Private
**/
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        });
        if(!bootcamp) {
            return res.status(400).json({ sucess: false, msg: `Bootcamp update not Sucessfull`});
        }
        res.status(200).json({ sucess: true, msg: `Updated Bootcamp Sucessfully`, data: bootcamp });
    } catch (error) {
        res.status(400).json({ sucess: false, msg: error });
    }
};

/**
 * @desc          Delete the bootcamp
 * @route         DELETE  /api/V1/bootcamps/:id
 * @access        Private
**/
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            return res.status(400).json({ sucess: false, msg: `Couldn't delete Bootcamp with id:${req.params.id}.` });
        }
        res.status(200).json({ sucess: true, msg: `Deleted Bootcamp with id:${req.params.id} Sucessfully`, data: bootcamp });
    } catch (error) {
        res.status(400).json({ sucess: false, msg: error });
    }
};

