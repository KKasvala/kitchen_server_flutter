const categoryController = require('../controllers/categories.controller');
const express = require('express');
const router = express.Router();

router.post('/createcategory', categoryController.create);
router.get('/getallcategory', categoryController.findAll);
router.get('/findonecategory/:id', categoryController.findOne);
//router.put('/updatecategory/:id', categoryController.update);

module.exports = router;