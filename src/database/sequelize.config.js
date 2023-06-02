const dotenv = require("dotenv");
dotenv.config();

const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("tic-tac-toe-api", "apiuser", "password", {
//   host: "192.168.1.12",
//   dialect: "mysql",
// });
// const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
//   host: process.env.DBHOST,
//   dialect: "mysql",
// });
const sequelize = new Sequelize(process.env.DBURL)

module.exports = { sequelize };
