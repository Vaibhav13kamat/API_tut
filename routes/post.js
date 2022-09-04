const express = require('express');
const router =express.Router();
const author = require("../models/author")

router.get('/', (_req, res) => {
    res.send('we are on posts1');
});


router.post('/',(req, res)=>{
   // console.log(req.body);
    const Author = new author({
        name: req.body.name,
        description: req.body.description
    });

    Author.save()
        .then(data=>{                   //entering it into database
            res.json(data);
        })
        .catch(err => {
            res.json({message: err });
        });
});

module.exports = router;