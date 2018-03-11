var express = require('express');
var router = express.Router();
var UserModel = require("../model/user.js");

router.get("/",function(req,res){
	res.render("register");
})

router.post("/",function(req,res){
	// console.log(req.body)
	UserModel.create({
		username:req.body.username,
		email:req.body.email,
		password:req.body.password
	},function(error,info){
		if(!error){
			res.redirect("/login");
		}
	})
})

module.exports = router;