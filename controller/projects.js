var mongoose;

mongoose = require("mongoose");

exports.create = function(req, res) {
  var Resource, fields, r;
  Resource = mongoose.model('project');
  fields = req.body;
  r = new Resource(fields);
  return r.save(function(err, resource) {
    if (err != null) {
      res.send(500, {
        error: err
      });
    }
    return res.send(resource);
  });
};

exports.retrieve = function(req, res) {
  var Resource;
  Resource = mongoose.model('project');
  if (req.params.id != null) {
    return Resource.findById(req.params.id, function(err, resource) {
      if (err != null) {
        res.send(500, {
          error: err
        });
      }
      if (resource != null) {
        res.send(resource);
      }
      res.send(404);
      return res.end();
    });
  } else {
    return Resource.find({}, function(err, coll) {
      res.send(coll);
      return res.end();
    });
  }
};

exports.update = function(req, res) {
  var Resource, fields;
  Resource = mongoose.model('project');
  fields = req.body;
  return Resource.findByIdAndUpdate(req.params.id, {
    $set: fields
  }, function(err, resource) {
    if (err != null) {
      res.send(500, {
        error: err
      });
    }
    if (resource != null) {
      res.send(resource);
    }
    res.send(404);
    return res.end();
  });
};

exports["delete"] = function(req, res) {
  var Resource;
  Resource = mongoose.model('project');
  return Resource.findByIdAndRemove(req.params.id, function(err, resource) {
    if (err != null) {
      res.send(500, {
        error: err
      });
    }
    if (resource != null) {
      res.send(200);
    }
    res.send(404);
    return res.end();
  });
};
