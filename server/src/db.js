'use strict'
const mysql = require('mysql');
const logger = './util/logger.js';

export let owners = ownersInfo()

async function ownersInfo() {
  const sql = 'SELECT * FROM owners';
  const res = await query(sql);
  return res
}

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


export let users = [
  {
    id: 1,
    name: 'gatsby taro',
    email: 'gatsby.taro@gmail.com',
    age: 32
  },
  {
    id: 2,
    name: 'gridsome taro',
    email: 'gridsom.taro@gmail.com',
    age: 55
  },
];

let idSequence = 2;

export function generateId() {
  idSequence++;
  return idSequence;
}
