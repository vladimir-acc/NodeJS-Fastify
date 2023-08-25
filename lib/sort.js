'use strict';

const customSort = (arr, key) => arr.sort((a, b) => {
  const keyA = a[key];
  const keyB = b[key];

  if (keyA === undefined || keyB === undefined) {
    return 0; // Возвращаем 0, если хотя бы одно значение не определено
  }
  return keyA - keyB;
});

module.exports = customSort;
