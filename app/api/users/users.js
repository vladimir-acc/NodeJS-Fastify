/* eslint-disable space-before-function-paren */
/* eslint-disable no-inner-declarations */
/* eslint-disable max-len */

'use strict';

const { join } = require('node:path');
const db = require(join(process.cwd(), 'db', 'init.js'));
const { createToken, hashPassword, validateEmail, validatePassword } = require('../../../lib/common.js');

async function findOne({ ...record }) {
  const key = Object.keys(record);
  const [data] = Object.values(record);

  return new Promise((resolve, reject) => {
    const sql = `SELECT id, login, email, role FROM users WHERE ${key} = $1`;
    db.get(sql, [data], (err, result) => {
      if (!result) {
        resolve(false);
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
}

async function getUserData(login, table) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM ${table} WHERE login = $1 AND actived = 1`, [login], (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else if (result) {
        resolve(result);
      } else {
        reject('login Not Found');
      }
    });
  });
}

async function setUserData(email, password, login, role, actived) {

  const validate = validateEmail(email);
  const hash = await hashPassword(password);
  const isEmail = await findOne({ email }, 'users');
  const isLogin = await findOne({ login }, 'users');
  // console.log({ validate, hash, data });

  return new Promise((resolve, reject) => {
    if (validate && !isEmail && !isLogin) {
      db.run('INSERT INTO users (email, password, login, role, actived) VALUES (?, ?, ?, ?, ?)', [email, hash, login, role, actived], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    } else if (isEmail) {
      reject('Email alredy exist');
    } else if (isLogin) {
      reject('Login alredy exist');
    } else if (!validate) {
      reject('Invalid email');
    }
  });

}

async function getRefreshToken(userId) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT refreshToken FROM token WHERE userId = ${userId}`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function createRefreshToken(userId, refreshToken) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO token (userId, refreshToken) VALUES (?, ?)';
    const data = [userId, refreshToken];
    db.run(sql, data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

async function updateRefreshToken(refreshToken, userId) {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE token SET refreshToken = ?, updated = datetime("now") WHERE userId = ?';
    const data = [refreshToken, userId];
    db.run(sql, data, (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

const users = () => ({

  async register({ email, password, login, role, actived }) {
    try {
      const ID = await setUserData(email, password, login, role, actived);
      const tokens = createToken({ ID, login, role });
      await db.run('INSERT INTO token (userId, refreshToken) VALUES (?, ?)', [ID, tokens.refreshToken]);
      return { tokens };

    } catch (err) {
      console.error(err);
      return { err };
    }
  },

  async auth(login, password, table) {
    try {
      const userData = await getUserData(login, table);
      const tokens = createToken({ id: userData.id, login, role: userData.role });
      const validate = await validatePassword(password, userData.password);

      if (!validate) {
        throw new Error('Invalid password');
      } else if (!userData) {
        throw new Error('Login not faound');
      } else {
        const refreshToken = await getRefreshToken(userData.id);
        if (!refreshToken) {
          await createRefreshToken(userData.id, tokens.refreshToken);

          return { ...tokens, user: { id: userData.id, login, role: userData.role } };
        } else {

          await updateRefreshToken(tokens.refreshToken, userData.id);

          return { ...tokens, user: { id: userData.id, login, role: userData.role } };
        }
      }
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  },
  async logout(id) {
    const sql = 'DELETE FROM token WHERE userId = $1';
    return new Promise((resolve, reject) => {
      // db.get('SELECT userId FROM token WHERE userId = $1', [id], (err, result) => {
      //   if (!result) reject('Not Found');
      // });

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

  async read(id, table) {
    const sql = `SELECT id, login, role, email, actived FROM ${table}`;

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

    const sql = `UPDATE ${table} SET ${delta} WHERE id = $${++i}`;
    data.push(id);
    return new Promise((resolve, reject) => {

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

