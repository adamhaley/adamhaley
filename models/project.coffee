mongoose = require 'mongoose'

project = new mongoose.Schema(
	name: {type: String, trim: true},
	start_date: {type: Date},
	end_date: {type: Date},
	url: {type: String, trim:true},
	tech_stack: {type:String, trim:true},
	blurb: {type: String, trim:true}
)

mongoose.model "project", project