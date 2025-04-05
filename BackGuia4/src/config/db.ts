import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Real23madrid$",
  database: "guia4",
});

export default pool;