/* eslint-disable strict */
'use strict';

const db = () => {
  const sqlite3 = require('sqlite3').verbose();
  return new sqlite3.Database(require.resolve('../db/db_osvita.db'));
};
module.exports = db();
