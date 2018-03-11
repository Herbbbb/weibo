var express = require('express');
var router = express.Router();
var BlogModel = require("../model/article.js");
var MessageModel = require("../model/message.js");
var CountModel = require("../model/count.js");


/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session.user){
		BlogModel.find({},function(error,info){
			if(!error){
				// console.log(info);
				// console.log(info.length)
				res.render("index",{who:req.session.user.username,list:info});
			}
		})
		
		
	}else{
		res.redirect("/login");
	}
 
});

router.get("/message/:id",function(req,res){
		console.log(req.params.id);
		res.redirect("/");

})


router.post("/",function(req,res){
	console.log(req.body)
	console.log(req.session)
	MessageModel.create({
			which:req.body.which,
			username:req.session.user.username,
			message:req.body.message
		
	},function(error,info){
		if(!error){
			console.log(info)
			// res.render("index",{who:req.body.username})
			res.redirect("/");
		}
	})
})

router.get("/count/:id",function(req,res){
	console.log(req.params);
	CountModel.create({
		which:req.params.id,
		number:0
	},function(error,info){
		console.log('')
	})

})


module.exports = router;
