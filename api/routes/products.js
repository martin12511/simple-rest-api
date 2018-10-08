const express = require('express');
const router = express.Router();

// GET to /products
router.get('/', (req,res,next) => {

    res.status(200).json({
    	verb: "GET",
    	status: 200,
    	path: req.originalUrl,
    });

})

// POST to /products
router.post('/', (req,res,next) => {

    res.status(200).json({
    	verb: "POST",
    	status: 200,
    	path: req.originalUrl,
    });
})

//GET to /products/id
router.get('/:productId', (req,res,next) => {

    const id = req.params.productId;

    res.status(200).json({
    	verb: "GET",
    	status: 200,
    	path: req.originalUrl,
    	id: id,
    });
})

//PATCH to /producsts/id
router.patch('/:productId', (req,res,next) => {

    const id = req.params.productId;

    res.status(200).json({
    	verb: "PATCH",
    	status: 200,
    	path: req.originalUrl,
    	id: id,
    });

})


// DELETE to /products/id
router.delete('/:productId', (req,res,next) => {

    const id = req.params.productId;

    res.status(200).json({
    	verb: "DELETE",
    	status: 200,
    	path: req.route,
    	id: id,
    });

})

// Export our routes tobe used in app.js
module.exports = router;