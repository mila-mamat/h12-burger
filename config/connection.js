const mysql = require('mysql2')

const defaultConfig = {
  host: 'localhost',
  user: 'root',
  password: '281561ml'
}

class DB {
  conn = null
  constructor (config) {  //pass in database name to be connected when an instance is created by class DB
    this.config = Object.assign(defaultConfig, config)   //config is an object,eg {database: burgers_db}
  }

  //create connection using defaultConfig above, and assign into conn
  
  get connection () { 
    // if the connection was created already, use the existing connection
    if (this.conn) return this.conn   

    // if connection is created for the first time, assign it into conn to reuse after
    try {
      this.conn = mysql.createConnection(this.config).promise()  //wrap the createConnection with promise
      console.log("connecting database ................................................")
      return this.conn
    } catch (err) {
      console.log(err)
      process.exit(1)
    }
  }
}

module.exports = DB
