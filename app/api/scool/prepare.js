/* eslint-disable max-len */
'use strict';

const { join } = require('node:path');

const sort = require(join(process.cwd(), 'lib', 'sort.js'));
const db = require(join(process.cwd(), 'db', 'init.js'));


const prepare = () => ({
  async show(id) {

    const sql = `SELECT scool.id, type, title, link, ico, price, assignId, scool_terms.scoolId,
      scool_terms.subtitle AS subtitle, scool_terms.period AS period, scool_terms.other AS other,
      scool_terms.sortId AS sortId FROM scool LEFT JOIN scool_terms
      ON scool_terms.scoolId = scool.id WHERE assignId = 5`;
    if (!id) {
      return new Promise((resolve, reject) => {

        db.all(sql, async (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });

      });
    } else {

      return new Promise((resolve, reject) => {

        db.get(`${sql} AND scool.id = $1`, [id], async (err, result) => {
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
  async read(id) {

    const sql = `SELECT scool.id, type, title, link, ico, price, assignId, scool_terms.scoolId,
      scool_terms.subtitle AS ch_subtitle, scool_terms.period AS ch_period, scool_terms.other AS ch_other,
      scool_terms.sortId AS ch_sortId FROM scool LEFT JOIN scool_terms
      ON scool_terms.scoolId = scool.id WHERE assignId = 5`;
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

            if (item.scoolId) {

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

        db.get(`${sql} AND scool.id = $1`, [id], async (err, result) => {
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
  async create({ ...record }) {
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
    const sql = `INSERT INTO scool (${fields}) VALUES (${params})`;
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

  async update(id, { ...record }) {
    const keys = Object.keys(record);
    const updates = new Array(keys.length);
    const data = new Array(keys.length);
    let i = 0;
    for (const key of keys) {
      data[i] = record[key];
      updates[i] = `${key} = $${++i}`;
    }
    const delta = updates.join(', ');
    const sql = `UPDATE scool SET ${delta} WHERE id = $${++i}`;
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

  async delete(id) {
    const sql = 'DELETE FROM scool WHERE id = $1';
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
module.exports = prepare;
