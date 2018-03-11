var express = require('express');
var router = express.Router();
var MessageModel = require("../model/message.js");

router.get("/home",function(req,res){
	MessageModel.find({},{},{skip:0,limit:10},function(error,info){
		if(!error){
			res.json(info)
		}
	})
})


module.exports = router;
