//lets not get too complicated this time around

const express = require("express");
const db = require("./database");
const path = require('path')
const currPath = path.join(__dirname, '../dist/')
//console.log(currPath)
const {
  getAllProjects,
  modifyProject,
  createNewProject,
  deleteProject,
} = require("./functions");

const App = express();

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

App.post("/projects", (req, res) => {
  if (req.body.secretCode == secretCode) {
    createNewProject()
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
