/* eslint-disable max-len */
'use strict';

const { join } = require('node:path');
// const sort = require('../../../lib/sort.js');
const sort = require(join(process.cwd(), 'lib', 'sort.js'));
const db = require(join(process.cwd(), 'db', 'init.js'));


const camp = () => ({
  async read(id, table) {

    const sql = `SELECT ${table}.id, type, title, link,ico, price, camp_terms.campId,
      camp_terms.subtitle AS ch_subtitle, camp_terms.period AS ch_period, camp_terms.other AS ch_other,
      camp_terms.sortId AS ch_sortId FROM ${table} LEFT JOIN camp_terms
      ON camp_terms.campId = ${table}.id`;
    if (!id) {
      return new Promise((resolve, reject) => {

        db.all(sql, async (err, result) => {

          const parent = [];
          for (const item of result) {

            let i = parent.findIndex((i) => i.id === item.id);
            if (i === -1) i = parent.push({
              id: item.id, type: item.type, title: item.title,
              link: item.link, ico: item.ico, price: item.price
            }) - 1;

            if (item.campId) {

              parent[i].terms = parent[i].terms || [];
              parent[i].terms.push({
                subtitle: item.ch_subtitle, period: item.ch_period,
                other: item.ch_other, sortId: item.ch_sortId
              });

              // parent[i].terms.sort((a, b) => a.orderId - b.orderId);
              sort(parent[i].terms, 'sortId');
            } else {
              parent[i].terms = [];
            }
          }
          resolve(parent);
          reject(err);

        });

      });
    } else {

      return new Promise((resolve, reject) => {

        db.get(`${sql} WHERE ${table}.id = $1`, [id], async (err, result) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            if (result) {
              resolve(result);
            } else {
              resolve({ message: 'Not Found' });
            }
            reject(err);
          }
        });
      });
    }
  },
  async create({ ...record }, table) {
    const keys = Object.keys(record);
    const nums = new Array(keys.length);
    const data = new Array(keys.length);
    let i = 0;
    for (const key of keys) {
      data[i] = record[key];
      nums[i] = `$${++i}`;
    }
    const fields = '"' + keys.join('", "') + '"';
    const params = nums.join(', ');
    const sql = `INSERT INTO "${table}" (${fields}) VALUES (${params})`;
    return new Promise((resolve, reject) => {
      db.run(sql, data, (err, result) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          // console.log(result);
          resolve(result);
        }
      });
    });
  },

  async update(id, { ...record }, table) {
    const keys = Object.keys(record);
    const updates = new Array(keys.length);
    const data = new Array(keys.length);
    let i = 0;
    for (const key of keys) {
      data[i] = record[key];
      updates[i] = `${key} = $${++i}`;
    }
    const delta = updates.join(', ');
    const sql = `UPDATE ${table} SET ${delta} WHERE id = $${++i}`;
    data.push(id);
    return new Promise((resolve, reject) => {
      db.run(sql, data, (err, result) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          // console.log(result);
          resolve(result);
        }
      });
    });
  },

  async delete(id, table) {
    const sql = `DELETE FROM ${table} WHERE id = $1`;
    return new Promise((resolve, reject) => {
      db.run(sql, [id], (err, result) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
});
module.exports = camp;
