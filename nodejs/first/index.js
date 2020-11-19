const fs = require("fs");

const a = "Pardeep";
// fs.writeFileSync("app.txt", a, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Write");
// });

// fs.appendFileSync("app.txt", "Saini", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Appended");
// });

fs.readFile("app.txt", "utf8", (err, val) => {
  if (err) throw err;
  console.log(val);
});

fs.mkdir("sds", () => {});
