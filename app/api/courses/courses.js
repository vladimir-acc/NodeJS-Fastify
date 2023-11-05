/* eslint-disable max-len */
'use strict';

const { join } = require('node:path');
const db = require(join(process.cwd(), 'db', 'init.js'));


const courses = () => ({
  async read(id) {
    const sql = 'SELECT * FROM course';
    if (!id) {
      return new Promise((resolve, reject) => {

        db.all(sql, (err, res) => {
          if (err) {
            reject(err);
          } else {
            // console.dir(res);
            resolve(res);
          }
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        db.all(`${sql}  WHERE typeId = $1`, [id], (err, res) => {
          console.log();
          if (err) {
            reject(err);
          } else {
            // console.dir(res);
            resolve(res);
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
    const sql = `INSERT INTO course(${fields}) VALUES(${params})`;
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
      updates[i] = `${key} = $${++i} `;
    }
    const delta = updates.join(', ');
    const sql = `UPDATE course SET ${delta} WHERE id = $${++i} `;
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
    const sql = 'DELETE FROM course WHERE id = $1';
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
module.exports = courses;
