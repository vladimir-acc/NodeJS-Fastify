/* eslint-disable camelcase */

'use strict';

const db = require('./db.js');
const camp = require('../app/api/camp/camp.js');
const users = require('../app/api/users/users.js');
const film = require('../app/api/scool/children.js');
const film18 = require('../app/api/scool/18plus.js');
const middle = require('../app/api/steam/middle.js');
const senior = require('../app/api/steam/senior.js');

const routes = {
  users: users(),
  camp_terms: db('camp_terms'),
  scool_terms: db('scool_terms'),
  assignment: db('assignment'),
  scool: db('scool'),
  blog: db('blog'),
  tags: db('tags'),
  image: db('image'),
  galery: db('galery'),
  camp: camp(),
  film: film(),
  film18: film18(),
  middle: middle(),
  senior: senior(),
};

module.exports = routes;
