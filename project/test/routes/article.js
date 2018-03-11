var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });

var BlogModel = require("../model/article.js");

router.get("/",function(req,res){
	if(req.session.user){
	res.render("article",{isshow:false,isnew:true});
	}
	else{
		res.redirect("/login")
	}
})

router.post("/", upload.single('file'),function(req,res){
		console.log(req.file)
	BlogModel.create({
		author:req.session.user.username,
		title:req.body.title,
		content:req.body.content,
		filepath:req.file?`/uploads/${req.file.filename}`:``
	},function(error,info){		
		if(!error){
			res.redirect("/");
		}
		else{
			console.log(error)
		}
	})
})



router.get("/delete/:id",function(req,res){
	console.log(req.params.id);
	BlogModel.findByIdAndRemove(req.params.id,function(error,info){
		if(!error){
			res.redirect("/");
		}
	})

})

router.get("/edit/:id",function(req,res){
	
	BlogModel.find({
			_id:req.params.id
		},function(error,info){
			if(!error){
				console.log(info);
				res.render("article",{isnew:false,info:info[0]});
			}
		})
})

router.post("/edit",upload.single('file'),function(req,res){
	console.log(req.body);
	BlogModel.findByIdAndUpdate(req.body.id,{$set:{
		title:req.body.title,
		content:req.body.content,
		filepath:req.file?`/uploads/${req.file.filename}`:``
	}},function(error,info){
		if(!error){
			res.redirect("/self")
		}
	})
})





module.exports = router;