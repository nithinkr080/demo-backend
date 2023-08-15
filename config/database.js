const mysql = require("mysql");

const pool = mysql.createPool({
  host: "0.0.0.0",
  user: "root",
  password: "password",
  database: "students",
  port: 3306,
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
