/* eslint-disable max-len */
'use strict';

const { join } = require('node:path');
const db = require(join(process.cwd(), 'db', 'init.js'));


const terms = () => ({
  async read(id) {
    const sql = 'SELECT * FROM course_terms';
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
        db.all(`${sql}  WHERE courseId = $1`, [id], (err, res) => {
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
});
module.exports = terms;
