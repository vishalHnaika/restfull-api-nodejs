/**
 * @desc          Get all the bootcamps
 * @route         GET  /api/V1/bootcamps
 * @access        Public
**/
exports.getBootcamps = ( req, res, next ) => {
    res
        .status(200)
        .json({ status: true, msg: 'Show all Bootcamps' });
}

/**
 * @desc          Get single bootcamp
 * @route         GET  /api/V1/bootcamp/:id
 * @access        Public
**/
exports.getBootcamp = ( req, res, next ) => {
    res
        .status(200)
        .json({ status: true, msg: `Get Bootcamp ${req.params.id}` });
}

/**
 * @desc          Create the bootcamp
 * @route         POST  /api/V1/bootcamp
 * @access        Private
**/
exports.createBootcamp = ( req, res, next ) => {
    res
        .status(200)
        .json({ status: true, msg: `Create Bootcamp` });
}

/**
 * @desc          Create the bootcamp
 * @route         PUT  /api/V1/bootcamps/:id
 * @access        Private
**/
exports.updateBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ status: true, msg: `Update Bootcamp ${req.params.id}` });
}

/**
 * @desc          Delete the bootcamp
 * @route         DELETE  /api/V1/bootcamps/:id
 * @access        Private
**/
exports.deleteBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ status: true, msg: `Delete Bootcamp ${req.params.id}` });
}

