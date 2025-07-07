const express = require('express');
const { 
    Form
 } = require('../controllers/FormRegController');

const router = express.Router();


// routes
router.post("/form/contact", Form)



module.exports = router;