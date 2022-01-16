const express = require('express');
const app = express();
const path = require('path');
var mysql = require('mysql');
const port = 8081;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
/*app.get('/toMap', (req, res) => {
  res.redirect('map.html?mapstr='+req.query.mapstr);
  console.log("ToMap: "+req.query.mapstr);
});*/
app.post('/updatemaps', (req, res) => {
  let update = req.body.update;
  if(update === "true"){
    let mapStr = req.body.mapstr;
    let fileName = req.body.file;
    let author = req.body.userId;
    console.log("Sql Query Update: "+req.body.mapstr);
    var con = mysql.createConnection({
      host: "localhost",
      user: "ec2-user",
      password: "xkcd",
      database: "Videntium"
    });
    con.connect(function(err) {
      if (err) throw err;
      con.query("INSERT INTO maps (file, authorId, content) VALUES ('"+fileName+"', '"+author+"', '"+mapStr+"');", function (err, result, fields) {
        if (err) throw err;
        //console.log("Sql Result Update: "+result);
      });
    });
  }
  res.write("Success");
});
app.post('/querrymaps', (req, res) => {
  var con = mysql.createConnection({
    host: "localhost",
    user: "ec2-user",
    password: "xkcd",
    database: "Videntium"
  });
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT maps.id, maps.file, maps.authorId, maps.content, maps.public, users.username FROM maps INNER JOIN users ON maps.authorId=users.id;", function (err, result, fields) {
      if (err) throw err;
      console.log("Sql Result Query: "+JSON.stringify(result.length));
      console.log("============================================\n\n============================================");
      res.write(JSON.stringify(result));
    });
  });
});
app.post('/mapvisibility', (req, res) => {
  let mapId = req.body.mapid;
  let visibility = req.body.vis;
  var con = mysql.createConnection({
    host: "localhost",
    user: "ec2-user",
    password: "xkcd",
    database: "Videntium"
  });
  con.connect(function(err) {
    if (err) throw err;
    con.query("UPDATE maps SET public="+visibility+" WHERE id="+mapId, function (err, result, fields) {
      if (err) throw err;
      console.log("Sql Result Query: "+JSON.stringify(result));
      console.log("============================================\n\n============================================");
      res.write(JSON.stringify(result));
    });
  });
});
app.post('/updateusers', (req, res) => {
  let user = req.body.user;
  let password = req.body.password;
  let name = req.body.name;
  var con = mysql.createConnection({
    host: "localhost",
    user: "ec2-user",
    password: "xkcd",
    database: "Videntium"
  });
  con.connect(function(err) {
    if (err) throw err;
    con.query("INSERT INTO users (name, username, password) VALUES ('"+name+"', '"+user+"', '"+password+"');", function (err, result, fields) {
      if (err) throw err;
      //console.log("Sql Result Update: "+result);
    });
  });
  res.write("Success");
});
app.post('/querryusers', (req, res) => {
  let user = req.body.user;
  let password = req.body.password;
  let id = req.body.id;
  var con = mysql.createConnection({
    host: "localhost",
    user: "ec2-user",
    password: "xkcd",
    database: "Videntium"
  });
  con.connect(function(err) {
    if (err) throw err;
    let queryStr;
    if (id === undefined)
      queryStr = "SELECT * FROM users WHERE username = '"+user+"' AND password = '"+password+"' ";
    else
      queryStr = "SELECT * FROM users WHERE id = '"+id+"'";
    console.log(user+", "+password+", "+id);
    con.query(queryStr, function (err, result, fields) {
      if (err) throw err;
      console.log("Sql Result Query: "+JSON.stringify(result));
      console.log("============================================\n\n============================================");
      res.write(JSON.stringify(result));
    });
  });
});
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});