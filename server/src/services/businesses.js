'use strict';
const _ = require('lodash')
const db = require('../util/mysql')
const FailedToGetError = require('../errors/failedToGetError')

module.exports = {
  buildBusinesses: buildBusinesses
}

async function buildBusinesses(businesses) {
  await Promise.all([
    mergeOwner(businesses)
  ]).then(() => {
  }).catch((err) => {
    console.log(err);
  });
}

// private function

async function mergeOwner(businesses) {
  const OwnersData = await getOwners()
  if (!OwnersData) throw new FailedToGetError('OwnersData');

  businesses.forEach(business => {
    const owner = OwnersData.find(owner => owner.id === business.owner_id);
    // console.log(owner)
    business.business_type = owner.business_type;
    business.business_name = owner.business_name;
  });
}

async function getOwners() {
  const query = 'SELECT * FROM owners'
  const res =  await db.query(query);
  return res
}