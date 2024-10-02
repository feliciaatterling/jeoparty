const router = require("express").Router();
const mongoose = require ('mongoose')


router.route('/').get((req,res) => {
    res.send('Hello World')
  
  })

  module.exports = router;