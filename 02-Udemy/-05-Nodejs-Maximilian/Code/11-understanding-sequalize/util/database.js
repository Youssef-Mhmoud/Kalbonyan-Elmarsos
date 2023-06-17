const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "mysqlYoussef", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
