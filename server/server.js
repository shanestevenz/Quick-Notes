const path = require("path");
const mongodb = require("mongodb");
require("dotenv").config();
const passport = require("passport");
const cors = require("cors");
const GitHubStrategy = require("passport-github2");
const session = require("express-session");
const express = require("express"),
  app = express();
const bodyParser = require("body-parser"); // middleware for parsing body
const User = require("./model/users.js");
const Notes = require("./model/notes.js");
const LocalStrategy = require("passport-local").Strategy;
const ObjectId = require("mongodb").ObjectId;
const cookieParser = require("cookie-parser");

app.use(
  cors({
    credentials: true,
  })
);

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000, secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// Session Management
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//, { failureRedirect: '/login', failureMessage:true}
// handle login attempt
app.post(
  "/login",
  function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        res.status(401).send({ msg: "Wrong credentials" });
      }
      req.login(user, next);
    })(req, res, next);
  },
  function (req, res) {
    if (req.user) {
      res.status(200).send({ msg: "Login successful" });
    }
  }
);

// handle register
app.post("/register", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  User.findByUsername(username)
    .exec()
    .then((user) => {
      if (user == null) {
        User.register({ username: username }, password);
        res.status(200).send({ msg: "User registered in database" });
      } else {
        res.status(401).send({ msg: "Username exists" });
      }
    });
});

app.get("/auth/status", function (req, res) {
  console.log("-----------------------------");
  console.log("/auth/status");
  //   console.log(req);
  if (req.isAuthenticated()) {
    console.log("Auth is true");
    res.writeHeader(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ isAuth: true }));
  } else {
    console.log("Auth is false");
    res.writeHeader(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ isAuth: false }));
  }
});

// CUSTOM MIDDLEWARES

const ensureUserLoggedIn = (req, res, cb) => {
  if (req.isAuthenticated()) {
    console.log("User is authenticated");
    cb();
  } else {
    res.sendStatus(401); // send not auth
  }
};

// ROUTES

// get tasks for an authenticated user
app.get("/notes", ensureUserLoggedIn, function (req, res) {
  console.log("Trying to get notes");
  console.log("Notes request for: " + req.user.username);
  User.findByUsername(req.user.username)
    .exec()
    .then((user) => {
      Notes.find({ userId: user._id })
        .exec()
        .then((tasks) => {
          //console.log(tasks)
          res.writeHeader(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(tasks));
        });
    });
});

// post request for adding a note for an authenticated user
app.post(
  "/notes/add",
  ensureUserLoggedIn,
  bodyParser.json({ extended: true }),
  function (req, res) {
    console.log("Add request for: " + req.user.username);
    const incomingData = req.body;
    console.log(incomingData);
    User.findByUsername(req.user.username)
      .exec()
      .then((user) => {
        incomingData.userId = user._id;
        const taskToAdd = new Notes(incomingData);
        taskToAdd.save(function (err) {
          if (err) {
            res.writeHead(400, "Cannot add the sent task", {
              "Content-Type": "text/plain",
            });
            res.end();
          } else {
            res.writeHead(200, "OK", { "Content-Type": "text/plain" });
            res.end();
          }
        });
      });
  }
);

// serving react files
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(process.env.PORT || 3000);
console.log('Server started with "node server.js"');
