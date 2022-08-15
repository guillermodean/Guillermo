const express = require ('express')
const router =  express.Router()

router.get ('/', (req,res)=>{
    res.render("index")
});

router.get ('/BFM', (req,res)=>{
    res.render("BFM")
});


module.exports = router;