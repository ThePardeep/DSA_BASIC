function removeDuplicate(arr) {
  let obj = {};
  for (let index = 0; index < arr.length; index++) {
    if (obj[arr[index]]) {
      continue;
    }
    obj[arr[index]] = 1;
  }
  let a = [];
  for (const key in obj) {
    a.push(key);
  }
  return a;
}

// obj = {}

// 3  {3: 1}
// 5  {3:1,5:1}
// 3 {3 : 1 , 5: 1}

const arr = [3, 5, 8, 3, 5, 9, 5];

// console.log(removeDuplicate(arr));

let num = 11;

let isPrime = false;
for (let index = 2; index < qurt; index++) {
  if (num % index == 0) {
    console.log("Not Prime");
    break;
  }
  isPrime = true;
}

if (isPrime) {
  console.log("Prime");
}
