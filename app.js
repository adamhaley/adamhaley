var app, express, http, mongoose, path, project, projects, routes, user;

express = require("express");

mongoose = require("mongoose");

project = require("./models/project");

projects = require("./controller/projects");

routes = require("./routes");

user = require("./routes/user");

http = require("http");

path = require("path");

app = express();

app.set("port", process.env.PORT || 4000);

app.set("views", path.join(__dirname, "views"));

app.engine("html", require("hogan-express"));

app.set("view engine", "html");

app.use(express.favicon());

app.use(express.logger("dev"));

app.use(express.json());

app.use(express.urlencoded());

app.use(express.methodOverride());

app.use(app.router);

app.use(express["static"](path.join(__dirname, "public")));

app.set('storage-uri', process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/adamhaley');

mongoose.connect(app.get('storage-uri'), {
  db: {
    safe: true
  }
}, function(err) {
  if (err != null) {
    console.log("Mongoose - connection error: " + err);
  }
  return console.log("Mongoose - connection OK");
});

if ("development" === app.get("env")) {
  app.use(express.errorHandler());
}

app.get("/", routes.index);

app.get("/users", user.list);

app.post('/projects', projects.create);

app.get('/projects', projects.retrieve);

app.get('/projects/:id', projects.retrieve);

app.put('/projects/:id', projects.update);

app["delete"]('/projects/:id', projects["delete"]);

http.createServer(app).listen(app.get("port"), function() {
  console.log("AdamHaley.com.. Express server listening on port " + app.get("port"));
});
