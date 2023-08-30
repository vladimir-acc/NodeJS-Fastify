/* eslint-disable max-len */
'use strict';

const { join } = require('node:path');
const db = require(join(process.cwd(), 'db', 'init.js'));


const course = () => ({
  async read(id) {

    const sql = `SELECT course.id AS id, types_of_courses.title AS type_title,course.title AS title, 
      course_terms.duration AS duration, course_terms.period AS period, 
      course_terms.cost AS price, course_terms.link AS link, course.typeId AS typeId
      FROM course LEFT JOIN course_terms ON course_terms.courseId = course.id, 
      types_of_courses ON course.typeId = types_of_courses.id`;
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
      const q = `${sql} WHERE course.id = $1`;
      return new Promise((resolve, reject) => {
        db.get(q, [id], (err, res) => {
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
module.exports = course;
