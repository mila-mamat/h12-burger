// Get the connection to the database
const DB = require('./connection')
const connection = new DB({ database: 'burgers_db' }).connection


// Object Relational Mapper (ORM)
const orm = {
  selectAll: async function () {
    const sql = 'SELECT * FROM burgers'
    const [rows] = await connection.query(sql);
    return rows
  },

  insertOne: async function (burgerName) {
    const sql = 'INSERT INTO burgers SET burger_name = ?'
    const [result] = await connection.query(sql, burgerName);
    return result
  },

  updateOne: async function (colName,burgerId) {
    const sql = `UPDATE burgers SET ?? = true WHERE id = ?`
    const [result] = await connection.query(sql, [colName,burgerId]);
    console.log("orm:",result)
    return result
  }
}

module.exports = orm
