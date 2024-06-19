const express = require("express");

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const { selectAll } = require("../database/database-mysql");
// const { selectAll } = require("../database/database-mongo");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/items", function (req, res) {
 
});

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
