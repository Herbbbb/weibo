var express = require('express');
var router = express.Router();
var UserModel = require("../model/user.js");

router.get("/",function(req,res){
	res.render("login",{isshowerror:false});
})


router.post("/",function(req,res){
	// console.log(req.body);
	UserModel.find({
		username:req.body.username,
		password:req.body.password
	},function(error,info){
		if(!error){
			if(info.length>0){
				req.session.user = info[0];
				res.redirect("/");
			}else{
			res.render("login",{isshowerror:true});
			}
		}
	})
})

module.exports = router;