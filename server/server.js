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
const Tasks = require("./model/tasks.js");
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

app.get("/auth/status", function (req, res) {
  console.log("-----------------------------");
  console.log("/auth/status");
  //   console.log(req);
  if (req.user) {
    console.log("Auth is true");
    res.writeHeader(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ isAuth: true }));
  } else {
    console.log("Auth is false");
    res.writeHeader(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ isAuth: false }));
  }
});

app.get("/status", function (req, res) {
  console.log(req.session);
  res.writeHeader(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ val: req.session }));
});

// serving react files
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(process.env.PORT || 3000);
console.log('Server started with "node server.js"');
