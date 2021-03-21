'use strict'
const mysql = require('mysql');

module.exports = {
  query: query
}

exports.query = query
async function query(sql, param, isSingle, nestTables) {
  const options = { sql: sql, nestTables: nestTables || false };
  return new Promise((resolve, reject) => {
    const params = {
      host: process.env.DATABASE_HOST || 'localhost',
      user: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || 'root',
      port: process.env.DATABASE_PORT || '8889',
      database: process.env.DATABASE_NAME || 'atotsugu'
    };
    const pool = mysql.createConnection(params);
    pool.query(options, param, (error, results) => {
      if (error) {
        logger.error(error);
        reject(error);
      }
      if (isSingle) {
        resolve(results ? results[0] : null);
      } else {
        resolve(results);
      }
    });
  });
};
  