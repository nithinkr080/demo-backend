const mysql = require("mysql");

const pool = mysql.createPool({
  host: "3.111.173.230",
  user: "root",
  password: "Verdeyu@123",
  database: "students",
  port: 5751,
});

pool.getConnection((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("connected to Database");
  }
});
connectDB = () => {
  return pool;
};

module.exports = { connectDB };
