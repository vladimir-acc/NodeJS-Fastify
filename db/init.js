/* eslint-disable strict */
'use strict';

require('dotenv').config();

const db = () => {
  const sqlite3 = require('sqlite3').verbose();
  return new sqlite3.Database(process.env.DB);
};

module.exports = db();
