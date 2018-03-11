var express = require('express');
var router = express.Router();
var BlogModel = require("../model/article.js")

router.get("/",function(req,res){

	if(req.session.user){
		BlogModel.find({"author":req.session.user.username},function(error,info){
			if(!error){
				res.render("self",{list:info})
				
			}
		})
		
	}else{
		res.redirect("/login");
	}
})
	

router.get("/logout",function(req,res){
	req.session.destroy(function(error){
		if(!error){
			res.redirect("/login");
		}
	});
})


module.exports = router;