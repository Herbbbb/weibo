var express = require('express');
var router = express.Router();
var BlogModel = require("../model/article.js");

router.get("/:id",function(req,res){
	if(req.session.user){
		// console.log(req.params.id)
		BlogModel.find({
			_id:req.params.id
		},function(error,info){
			if(!error){
				// console.log(info)
				res.render("detail",{info:info[0]})
			}
		})
	}else{
		res.redirect("");
	}
})





module.exports = router;