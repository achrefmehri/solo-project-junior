const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "gocoffee",
}).promise()

connection.connect()
.then(()=>console.log('connected succ to DB'))
.catch((err)=>console.log(err))

//tables Database
const selectAllTables = () => {
 const sql = 'SELECT * FROM tables'
 return connection.query(sql)
};
const addTable = (newTable) => {
  const sql = 'INSERT INTO tables SET ?'
  return connection.query(sql,newTable)
 };


 // drinks Database 

 const selectAllDrinks = () => {
  const sql = 'SELECT * FROM drinks'
  return connection.query(sql)
 };
 const addDrink = (newDrink) => {
   const sql = 'INSERT INTO drinks SET ?'
   return connection.query(sql,newDrink)
  };
  const deleteDrink =(id)=>{
    const sql = 'DELETE FROM drinks WHERE id = ?'
    return connection.query(sql,id)
  }
  const updateDrink = (newUpd,DrinkId)=>{
    const sql = `UPDATE drinks SET ? WHERE id=?`
    return connection.query(sql,[newUpd,DrinkId])
  }

module.exports = {
  selectAllTables,addTable,selectAllDrinks,addDrink,deleteDrink,updateDrink
};
