/* eslint-disable max-len */
'use strict';

const db = require('../db/init.js');

const crud = () => ({

  async show(condition, limit, offset, table) {

    let count;

    return new Promise((resolve, reject) => {

      if (!condition) {
        db.get(`SELECT COUNT(*) AS count FROM ${table} WHERE published = 1`, async (err, res) => {
          count = Math.ceil(res.count / limit);
        });
        const sql = `SELECT * FROM ${table} WHERE published = 1 LIMIT ? OFFSET ?`;
        db.all(sql, [limit, offset], (err, result) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            (result.length > 0) ? resolve({ count, result }) : resolve('Not Found');
          }
        });
      } else {
        db.get(`SELECT COUNT(*) AS count FROM ${table} WHERE published = 1 AND ${condition}`, async (err, res) => {
          count = Math.ceil(res.count / limit);
        });
        const sql = `SELECT * FROM ${table} WHERE published = 1 AND ${condition} LIMIT ? OFFSET ?`;

        db.all(sql, [limit, offset], (err, result) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            (result.length > 0) ? resolve({ count, result }) : resolve('Not Found');
          }
        });
      }

    });
  },

  async read(id, table) {
    const sql = `SELECT * FROM ${table}`;

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

    try {
      const result = await db.run(sql, data);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }


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
    try {
      const result = await db.run(sql, data);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async delete(id, table) {
    const sql = `DELETE FROM ${table} WHERE id = $1`;

    try {
      const result = await db.run(sql, [id]);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async findOne({ ...record }, table) {
    const key = Object.keys(record);
    const [data] = Object.values(record);
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM ${table} WHERE ${key} = $1`;
      db.get(sql, [data], (err, result) => {
        if (!result) {
          reject('Not Found');
        } else {
          db.get(sql, [data], (err, result) => {
            if (err) {
              reject(err);
              console.error(err);
            } else {
              resolve(result);
            }
          });
        }
      });

    });
  },
  async find({ ...record }, table) {
    const key = Object.keys(record);
    const [data] = Object.values(record);
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM ${table} WHERE ${key} = $1`;
      db.all(sql, [data], (err, result) => {
        if (!result) {
          reject('Not Found');
        } else {
          db.all(sql, [data], (err, result) => {
            if (err) {
              reject(err);
              console.error(err);
            } else {
              resolve(result);
            }
          });
        }
      });

    });
  },

});

module.exports = (options) => crud(db, options);

