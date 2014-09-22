var mongoose, project;

mongoose = require('mongoose');

project = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  start_date: {
    type: String,
    trim: true
  },
  end_date: {
   type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  },
  tech_stack: {
    type: String,
    trim: true
  },
  blurb: {
    type: String,
    trim: true
  }
});

mongoose.model("project", project);
