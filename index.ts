import _ from 'lodash';
// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var array = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];

var users = [
  { id: 1, name: 'ted' },
  { id: 1, name: 'ted' },
  { id: 1, name: 'bob' },
  { id: 3, name: 'sara' },
  { id: 4, name: 'test' },
  { id: 4, name: 'test' },
  { id: 5, name: 'abc' },
  { id: 6, name: 'abc' },
  { id: 7, name: 'test2' },
  { id: 8, name: 'test1' },
  { id: 8, name: 'test1' },
];

//1. includes boolean

console.log(array.includes(2)); // returns true

//2.find : returns first matched values

let testfind = array.find((el) => el > 2);
console.log('array find', testfind);
let testfind2 = users.find((el) => el.id > 2);
console.log('array of objects find', testfind2);

let filterValue = (users, key, value) => users.find((v) => v.name === 'sara');
console.log('find elements', filterValue);

//3.findIndex index

let testindex = array.findIndex((val) => val > 1);
console.log('array  findindex', testindex);

let testindex2 = users.findIndex((val) => val.id > 1);
console.log('array of objects findindex', testindex2);

//4. indexOf index

let testindexOf = array.indexOf(2);
console.log('array index of', testindexOf);

//5. lastindexOf index

let testLastindexOf = array.lastIndexOf(2);
console.log('array last index of', testLastindexOf);

//6. every boolean

let testevery1 = array.every((val) => val > 3);
let testevery2 = users.every((val) => val.id > 3);

console.log('array every', testevery1);
console.log('array of objects every', testevery2);

//7. some boolean

let testsome1 = array.some((val) => val > 3);
let testsome2 = users.some((val) => val.id > 3);

console.log('array some', testsome1);
console.log('array of objects some', testsome2);

//8. filter all values

let testfilter1 = array.filter((val) => val > 3);
let testfilter2 = users.filter((val) => val.id > 3);
array.filter((item, index, array) => {
  console.log('index item array', index, item, array);
});
console.log('array filter', testfilter1);
console.log('array of objects filter', testfilter2);

//9. map values

let val = [];
let val2 = [];
array.map((item) => {
  if (item >= 3) val.push(item);
});
users.map((item) => {
  if (item.id >= 3) val2.push(item);
});
console.log('map array', val);
console.log('map  of objects', val2);

//10. lodash

let lodashtest1 = _.find(users, function (o) {
  return o.id < 2;
});
console.log('loadsh find 1 ', lodashtest1);

// The `_.matches` iteratee shorthand.
let lodashtest2 = _.find(users, { id: 1, name: 'ted' });
console.log('loadsh find 2 ', lodashtest2);

// The `_.matchesProperty` iteratee shorthand.
let lodashtest3 = _.find(users, ['name', 'sara']);
console.log('loadsh find 3 ', lodashtest3);

// The `_.property` iteratee shorthand.
let lodashtest4 = _.find(users, 'name');
console.log('loadsh find 4 ', lodashtest4);

//filter
let lodashtest5 = _.filter(users, function (o) {
  return o.id === 1;
});
console.log('loadsh filter 1 ', lodashtest5);

// The `_.matches` iteratee shorthand.
let lodashtest6 = _.filter(users, { id: 1, name: 'ted' });
console.log('loadsh filter 2 ', lodashtest6);

// The `_.matchesProperty` iteratee shorthand.
let lodashtest7 = _.filter(users, ['name', 'ted']);
console.log('loadsh filter 3 ', lodashtest7);

// The `_.property` iteratee shorthand.
let lodashtest8 = _.filter(users, 'name');
console.log('loadsh filter 4 ', lodashtest8);

//includes

let lodashtest9 = _.includes(array, 1);
console.log('loadsh includes 1 ', lodashtest9);

let lodashtest10 = _.includes(array, 3, 2);
console.log('loadsh includes 2 ', lodashtest10);

let lodashtest11 = _.includes({ a: 1, b: 2 }, 1);
console.log('loadsh includes 3 ', lodashtest11);

let lodashtest12 = _.includes('abcd', 'bc');
console.log('loadsh includes 4 ', lodashtest12);

//find index lodash

let lodashtest13 = _.findIndex(users, function (o) {
  return o.name == 'ted';
});
console.log('find index lodash 1', lodashtest13);

// The `_.matches` iteratee shorthand.
let lodashtest14 = _.findIndex(users, { name: 'ted', id: 1 });
console.log('find index lodash 2', lodashtest14);

// The `_.matchesProperty` iteratee shorthand.
let lodashtest15 = _.findIndex(users, ['id', 1]);
console.log('find index lodash 3', lodashtest15);

// The `_.property` iteratee shorthand.
let lodashtest16 = _.findIndex(users, 'id');
console.log('find index lodash 4', lodashtest16);

// The `_.property` iteratee shorthand.
let lodashtest17 = _.findIndex(
  array,
  (e) => {
    return e > 1;
  },
  0
);
console.log('find index lodash array', lodashtest17);
