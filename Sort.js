let a = [0, 1, 2, 0, 1, 1, 2, 0];

let obj = {};
let n = a.length;

for (let i = 0; i < n; i++) {
  if (obj[a[i]]) {
    obj[a[i]] = obj[a[i]] + 1;
  } else {
    obj[a[i]] = 1;
  }
}

let t = 0;
let j = 0;

for (const key in obj) {
  t = t + obj[key];
  for (let i = j; i < t; i++) {
    a[i] = key;
  }
  j = j + obj[key];
}

console.log(a);
