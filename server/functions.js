//contains all of the database functions
//trying to keep this project pretty simple at the expense of organization

const db = require("./database");

function getAllProjects() {
  //console.log('here')
  return new Promise((resolve, reject) => {
    db.query(
      {
        sql: "SELECT projects.*, COUNT(upvotes.projectID) AS numVotes FROM projects LEFT JOIN upvotes ON projects.projectID = upvotes.projectID GROUP BY upvotes.projectID, projects.projectID;",
      },
      function (err, rows) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

function createNewProject(data) {
  return new Promise((resolve, reject) => {
    db.query(
      {
        sql:
          "INSERT INTO projects (title, description, status, link, projectDate, keywords, imageLink) VALUES (?, ?, ?, ?, ?, ?, ?);",
        values: [
          data.title,
          data.description,
          data.status,
          data.link,
          data.projectDate,
          data.keywords,
          data.imageLink,
        ],
      },
      function (err, row) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          db.query(
            {
              sql: "SELECT * FROM projects WHERE projectID = ?;",
              values: [row.insertId],
            },
            function (err, row) {
              if (err) {
                console.log(err);
                reject(err);
              } else {
                resolve(row[0]);
              }
            }
          );
        }
      }
    );
  });
}

function modifyProject(data) {
  return new Promise((resolve, reject) => {
    db.query(
      {
        sql:
          "UPDATE projects SET title = ?, description = ?, status = ?, link = ?, projectDate = ?, keywords = ?, imageLink = ? WHERE projectID = ?;",
        values: [
          data.title,
          data.description,
          data.status,
          data.link,
          data.projectDate,
          data.keywords,
          data.imageLink,
          data.projectID,
        ],
      },
      function (err, row) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(data.projectID);
          db.query(
            {
              sql: "SELECT * FROM projects WHERE projectID = ?;",
              values: [data.projectID],
            },
            function (err, row) {
              if (err) {
                console.log(err);
                reject(err);
              } else {
                console.log(row);
                resolve(row[0]);
              }
            }
          );
        }
      }
    );
  });
}

function deleteProject(data) {
  return new Promise((resolve, reject) => {
    db.query(
      {
        sql: "DELETE FROM projects WHERE projectID = ?",
        values: [data.projectID],
      },
      function (err, row) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(row);
        }
      }
    );
  });
}

function createUpvote(data) {
  return new Promise((resolve, reject) => {
    db.query(
      {
        sql:
          "INSERT INTO upvotes (ipAddress, projectID, createdTime) VALUES (?, ?, ?)",
        values: [data.ipAddress, data.projectID, data.createdTime],
      },
      function (err, row) {
        if (err) {reject(err)} else {
            db.query(
                {
                  sql: "SELECT * FROM upvotes WHERE voteID = ?",
                  values: [row.insertId],
                },
                function (err, row) {
                  err ? reject(err) : resolve(row[0]);
                }
              );
        }
        
      }
    );
  });
}

function getVotesOfIP(ipAddress) {
  return new Promise((resolve, reject) => {
    db.query(
      { sql: "SELECT * FROM upvotes WHERE ipAddress = ?", values: [ipAddress] },
      function (err, rows) {
        err ? reject(err) : resolve(rows);
      }
    );
  });
}

function getUpvotes() {
  return new Promise((resolve, reject) => {
    db.query({
      sql: "SELECT * FROM ",
    });
  });
}

module.exports = {
  getAllProjects,
  createNewProject,
  modifyProject,
  deleteProject,
  createUpvote,
  getVotesOfIP,
  getUpvotes,
};
