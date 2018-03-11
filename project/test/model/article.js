//创建一个模型，对应数据库中的集合
//通过模型操作集合，增删改查

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var obj = {
	author:String,
	title:String,
	content:String,
	filepath:String
}


var model = mongoose.model("blog",new Schema(obj))

//model将来可以操作users集合

module.exports = model;