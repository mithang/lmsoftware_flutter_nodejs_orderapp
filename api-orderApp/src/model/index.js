import Sequelize from "sequelize";
// import cls from 'continuation-local-storage'
// ``
// const namespace = cls.createNamespace('transaction-namespace')
// Sequelize.useCLS(namespace)

const sequelizeInstance = new Sequelize(null, null, null, {
  dialect: "mysql",
  replication: {
    read: [
      {
        host: "localhost",
        port: "3309",
        username: "root",
        password: "myRootpwd32",
        database: "OrderApp",
        pool: {
          max: 100,
          idle: 3000,
          acquire: 6000,
        },
      },
    ],
    write: {
      host: "localhost",
      port: "3309",
      username: "root",
      password: "myRootpwd32",
      database: "OrderApp",
      pool: {
        max: 100,
        idle: 3000,
        acquire: 6000,
      },
    },
  },
  define: {
    underscored: false,
    freezeTableName: true,
    charset: "utf8mb4",
    dialectOptions: {
      collate: "utf8mb4_general_ci",
    },
    timestamps: false,
  },
  logging: true, // console.log
  timezone: "+07:00",
  dialectOptions: {},
});


// import mysql from 'mysql2/promise';


// initialize();

// async function initialize() {
    
//     const connection = await mysql.createConnection({ 
//       host:"localhost",
//       port:"3309",
//       user:"root",
//       password:"myRootpwd32",  
//       database:"OrderApp"  
//     });
//     await connection.query(`CREATE DATABASE IF NOT EXISTS OrderApp ;`);

//     // connect to db
//     const sequelize = new Sequelize('OrderApp', 'root', 'myRootpwd32', { dialect: 'mysql' });

//     // init models and add them to the exported db object
//     var User = require('../model/user')(sequelize);

//     // sync all models with database
//     await sequelize.sync();
// }

export default sequelizeInstance;
