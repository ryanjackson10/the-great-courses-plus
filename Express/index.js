const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
var mysql = require('mysql');
 
const app = express();
app.use(express.static(__dirname));
 
app.use(bodyParser.json()); // support json encoded bodies



var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'GreatCoursesDB'
})

connection.connect((err) => {
    if (!err) {
        console.log("Connected!");
    }
    else {
        console.log(err);
    }
});


  app.get('/api/courses/', function (req, res) {
      res.send(courses);
  })

  app.get('/api/allCourses', function (req, res) {
      connection.query("SELECT * FROM Courses", (err, rows, fields) => {
          if (!err) {
              res.send(rows);
          }
          else {
              res.send(err);
          }
      })
  })

  app.get('/api/worldHistoryCourses', function (req, res) {
      connection.query("SELECT * FROM Courses WHERE course_category = 'World History'", (err, rows, fields) => {
          if (!err) {
              res.send(rows);
          }
          else {
              res.send(err);
          }
      })
  })

app.get('/api/literatureCourses', function(req, res) {
    connection.query("SELECT * FROM Courses WHERE course_category = 'Literature'", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else {
            res.send(err);
        }
    })
})

app.get('/api/featuredCourse', function (req, res) {
    connection.query('SELECT * FROM Courses WHERE course_id = 3', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err);
        }
    })
})

app.get('/api/ancientCourses', (req, res) => {
    connection.query("SELECT * FROM Courses WHERE course_category = 'Ancient History'", (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err);
        }
    })
})

app.get('/api/medievalCourses', (req, res) => {
    connection.query("SELECT * FROM Courses WHERE course_category = 'Medieval History'", (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err);
        }
    })
})



app.get('/api/earlyModernCourses', (req, res) => {
    connection.query("SELECT * FROM Courses WHERE course_category = 'Early Modern History'", (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err);
        }
    })
})

app.get('/api/modernCourses', (req, res) => {
    connection.query("SELECT * FROM Courses WHERE course_category = 'Modern History'", (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err);
        }
    })
})

app.get('/api/theology', (req, res) => {
    connection.query("SELECT * FROM Courses WHERE course_category = 'Theology'", (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err);
        }
    })
})

app.get('/api/science', (req, res) => {
    connection.query("SELECT * FROM Courses WHERE course_category = 'Science'", (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err);
        }
    })
})

app.get('/api/technology', (req, res) => {
    connection.query("SELECT * FROM Courses WHERE course_category = 'Technology'", (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err);
        }
    })
})

  
  // HTTP listener
  app.listen(3000, function () {
      console.log('Example listening on port 3000!');
  });
  module.exports = app;
  
//   connection.end();