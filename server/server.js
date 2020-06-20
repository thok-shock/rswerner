//lets not get too complicated this time around

const express = require("express");
const db = require("./database");
const path = require('path')
const fileUpload = require('express-fileupload')
const currPath = path.join(__dirname, '../dist/')
const multer = require('multer')
const crypto = require('crypto')
const mime = require(
  'mime'
)
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../dist/uploads')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});
var upload = multer({ storage: storage });
const fs = require('fs')
//console.log(currPath)
const {
  getAllProjects,
  modifyProject,
  createNewProject,
  deleteProject,
} = require("./functions");

const App = express();

App.use(
  express.urlencoded({
      extended: true
  })
);

App.use(express.json());

const secretCode = process.env.secretCode;

const imgRouter = express.Router()
App.use('/img', imgRouter)

imgRouter.get('/:uri', (req, res) => {
    res.sendFile(currPath + '/img/' + req.params.uri)
})

imgRouter.post('/', (req, res) => {
    
})

App.get('/', (req, res) => {
    res.sendFile(currPath + 'index.html')
})

App.get('/stylesheet.css', (req, res) => {
    res.sendFile(currPath + 'stylesheet.css')
})

App.get('/home.js', (req, res) => {
    res.sendFile(currPath + 'home.js')
})

App.get("/projects", (req, res) => {
  getAllProjects()
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      res.status(500);
    });
});

const uploadRouter = express.Router()
App.use('/upload', uploadRouter);

uploadRouter.get('/:uri', (req, res) => {
  res.sendFile(currPath + '/uploads/' + req.params.uri)
})

App.post("/projects", upload.single('file'), (req, res) => {
  //console.log(req)
  //console.log(req.body)
  if (req.body.secretCode == secretCode) {
    req.body.imageLink = req.file.filename
    createNewProject(req.body)
      .then((row) => {
        res.json(row);
      })
      .catch((err) => {
        res.status(500);
      });
  }
});

App.delete("/projects", (req, res) => {
  if (req.body.secretCode == secretCode) {
    deleteProject()
      .then((row) => [res.json(row)])
      .catch((err) => {
        res.status(500);
      });
  }
});

App.listen(2999, () => {
  console.log("Server Running on port 2999");
  //console.log(process.env)
});
