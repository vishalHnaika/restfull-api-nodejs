const express = require('express');
const { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp } = require('../Controllers/bootcamp');
const router  = express.Router();

/* We here had routed '/' which indicated the monted rourter '/api/V1/bootcamps' */
router
.route('/')
.get(getBootcamps)
.post(createBootcamp);

router
.route('/:id')
.get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp);

module.exports = router;