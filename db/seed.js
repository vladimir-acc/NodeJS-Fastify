/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
'use strict';

const { PrismaClient } = require('@prisma/client');
const { users, camp, camp_terms, assignment, tags, blog, scool, scool_terms,
  types_of_courses, course, course_terms, contact, cities } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {

    for (const user of users) {
      await prisma.users.create({ data: user });
    }
    console.dir('Added data users');

    for (const campData of camp) {
      await prisma.camp.create({ data: campData });
    }
    console.dir('Added data camp');

    for (const term of camp_terms) {
      await prisma.camp_terms.create({ data: term });
    }
    console.dir('Added data camp_terms');

    for (const dataAssignment of assignment) {
      await prisma.assignment.create({ data: dataAssignment });
    }
    console.dir('Added data assignment');

    for (const dataTags of tags) {
      await prisma.tags.create({ data: dataTags });
    }
    console.dir('Added data tags');

    for (const dataBlog of blog) {
      await prisma.blog.create({ data: dataBlog });
    }
    console.dir('Added data blog');

    for (const scoolData of scool) {
      await prisma.scool.create({ data: scoolData });
    }
    console.dir('Added data scool');

    for (const terms of scool_terms) {
      await prisma.scool_terms.create({ data: terms });
    }
    console.dir('Added data scool_terms');

    for (const typesData of types_of_courses) {
      await prisma.types_of_courses.create({ data: typesData });
    }
    console.dir('Added data types_of_courses');
    for (const courseData of course) {
      await prisma.course.create({ data: courseData });
    }
    console.dir('Added data course');

    for (const terms of course_terms) {
      await prisma.course_terms.create({ data: terms });
    }
    console.dir('Added data course_terms');

    for (const contactData of contact) {
      await prisma.contact.create({ data: contactData });
    }
    console.dir('Added data contact');

    for (const city of cities) {
      await prisma.cities.create({ data: city });
    }
    console.dir('Added data city');

  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
load();
