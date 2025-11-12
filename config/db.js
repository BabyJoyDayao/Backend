/*import mysql from "mysql2/promise.js"

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: "",
    database: process.env.DATABASE
})

export default pool;*/

import mysql from "mysql2/promise.js";

const pool = mysql.createPool({
  host: "localhost",       // usually "localhost" or "127.0.0.1"
  user: "root",            // default XAMPP MySQL user
  password: "",            // leave blank if no password
  database: "librarydb",// replace with your actual DB
  port: 3307               // default MySQL port (check XAMPP)
});

export default pool;
