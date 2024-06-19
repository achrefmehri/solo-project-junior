const express = require("express");
const cors = require("cors");
const {
  selectAllTables,
  addTable,
  selectAllDrinks,
  addDrink,
} = require("../database/database-mysql");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
// tables API
app.get("/api/tables", async function (req, res) {
  try {
    const tables = await selectAllTables();
    res.json(tables[0]);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.post("/api/tables", async function (req, res) {
  try {
    const tables = await addTable(req.body);
    res.json("added succ");
  } catch (error) {
    res.status(500).send(error);
  }
});

// drinks API 
app.get("/api/drinks", async function (req, res) {
  try {
    const drinks = await selectAllDrinks();
    res.json(drinks[0]);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.post("/api/drinks", async function (req, res) {
  try {
    const drinks = await addDrink(req.body);
    res.json("added succ");
  } catch (error) {
    res.status(500).send(error);
  }
});


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
