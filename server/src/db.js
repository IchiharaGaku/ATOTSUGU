'use strict'
const db = require('./util/mysql');
const logger = require('./util/logger.js');
const business = require('./services/businesses.js')

export let owners = ownersInfo()

async function ownersInfo() {
  logger.info('query/owners');
  const sql = `SELECT * FROM owners`;
  const res = await db.query(sql);
  return res
}

export let businesses = allBusinesses()

async function allBusinesses() {
  logger.info('query/businesses');
  const sql = `SELECT * FROM business`
  const businesses = await db.query(sql)

  await business.buildBusinesses(businesses)
  return businesses
}

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
