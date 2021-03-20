'use strict'
// const db = '../util/mysql.js';
const logger = '../util/logger.js';

const mysql = require('mysql');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
// const logger = require('./logger');

export let owners = ownerInfo()

async function ownerInfo() {
  const sql = 'SELECT * FROM owners'
  const res = await query(sql)
  return res
}
const param = {
  connectionLimit: 10,
  host: 'localhost',
  user: 'atotsugu',
  password: 'atotsugu',
  port: '13307',
  database: 'atotsugu'
};    
// exports.query = query;
async function query(sql, param, isSingle, nestTables) {
    // console.log(param)
    const pool = mysql.createConnection(param);
  const options = { sql: sql, nestTables: nestTables || false };
  return new Promise((resolve, reject) => {
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
