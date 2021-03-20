// const mysql = require('mysql');
// const { promisify } = require('util');
// const fs = require('fs');
// const path = require('path');
// const logger = require('./logger');

// module.exports = {
//   query: query,
//   execTransaction: execTransaction,
// }

// const param = {
//   connectionLimit: 10,
//   host: 'b8272a25f901',
//   user: 'atotsugu',
//   password: 'atotsugu',
//   port: '13307',
//   database: 'atotsugu'
// };

// const pool = mysql.createPool(param);

// exports.query = query;
// async function query(sql, param, isSingle, nestTables) {
//     console.log(param)
//   const options = { sql: sql, nestTables: nestTables || false };
//   return new Promise((resolve, reject) => {
//     pool.query(options, param, (error, results) => {
//       if (error) {
//         logger.error(error);
//         reject(error);
//       }
//       if (isSingle) {
//         resolve(results ? results[0] : null);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };

// async function execTransaction(callback) {
//   const connection = await promisify(pool.getConnection).bind(pool)();

//   try {
//     await promisify(connection.beginTransaction).bind(connection)();
//     await callback(connection);
//     await promisify(connection.commit).bind(connection)();
//   } catch (err) {
//     logger.error(err);
//     await promisify(connection.rollback).bind(connection)();
//     throw err;
//   } finally {
//     connection.release();
//   }
// }