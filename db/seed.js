/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
'use strict';

const { PrismaClient } = require('@prisma/client');
const { users, camp, camp_terms, assignment, tags, blog, scool, scool_terms } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {

    for (const user of users) {
      await prisma.users.create({ data: user });
    }
    console.dir('Added users data');

    for (const campData of camp) {
      await prisma.camp.create({ data: campData });
    }
    console.dir('Added camp data');

    for (const term of camp_terms) {
      await prisma.camp_terms.create({ data: term });
    }
    console.dir('Added camp_terms data');

    for (const dataAssignment of assignment) {
      await prisma.assignment.create({ data: dataAssignment });
    }
    console.dir('Added assignment data');

    for (const dataTags of tags) {
      await prisma.tags.create({ data: dataTags });
    }
    console.dir('Added tags data');

    for (const dataBlog of blog) {
      await prisma.blog.create({ data: dataBlog });
    }
    console.dir('Added blog data');

    for (const scoolData of scool) {
      await prisma.scool.create({ data: scoolData });
    }
    console.dir('Added scool data');

    for (const terms of scool_terms) {
      await prisma.scool_terms.create({ data: terms });
    }
    console.dir('Added scool_terms data');



  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
load();
