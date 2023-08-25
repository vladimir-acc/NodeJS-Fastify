/* eslint-disable max-len */

'use strict';

const { join } = require('node:path');
const db = require(join(process.cwd(), 'db', 'init.js'));
const { hashPassword, validateEmail } = require('../../../lib/common.js');

const users = () => ({

  async read(id, table) {
    const sql = `SELECT id, login, password, email FROM ${table}`;

    return new Promise((resolve, reject) => {
      if (!id) {
        db.all(sql, (err, result) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(result);
          }
        });
      } else {
        db.get(`${sql} WHERE id = $1`, [id], (err, result) => {
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
      }
    });
  },

  async create({ login, password, email }, table) {

    const sql = `INSERT INTO "${table}" (login, password, email) VALUES ($1, $2, $3)`;
    const hashPwd = await hashPassword(password);
    const checkEmail = await validateEmail(email);
    const data = [login, hashPwd, email];
    return new Promise((resolve, reject) => {
      if (checkEmail) {
        db.run(sql, data, (err, result) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            // console.log(result);
            resolve(result);
          }
        });
      } else {
        reject({ message: 'Email - invalid' });
      }
    });
  },

  async update(id, { ...record }, table) {
    const keys = Object.keys(record);
    const updates = new Array(keys.length);
    const data = new Array(keys.length);
    let i = 0;
    for (const key of keys) {
      data[i] = record[key];
      if (record[key] === record['password']) data[i] = await hashPassword(record['password']);
      updates[i] = `${key} = $${++i}`;
    }
    const delta = updates.join(', ');
    // console.log(keys.find((element) => element == 'emails'));

    const sql = `UPDATE ${table} SET ${delta} WHERE id = $${++i}`;
    data.push(id);
    return new Promise((resolve, reject) => {
      if (record['email'] && validateEmail(record['email'])) {

        db.get(`SELECT id FROM ${table} WHERE id = $1`, [id], (err, result) => {
          if (!result) reject('Not Found');
        });

        db.run(sql, data, (err, result) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {

            resolve(result);
          }
        });
      } else {
        reject({ error: 'Email is invalid' });
      }
    });

  },

  async delete(id, table) {
    const sql = `DELETE FROM ${table} WHERE id = $1`;
    return new Promise((resolve, reject) => {
      db.get(`SELECT id FROM ${table} WHERE id = $1`, [id], (err, result) => {
        if (!result) reject('Not Found');
      });

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

module.exports = users;

