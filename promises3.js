// Import fs module
let fs = require("fs");

// Promise with async code to get file data
new Promise((resolve, reject) => {
  fs.readFile("package.json", (err, data) => {
     if (err) {
       reject(err);
     } else {
       resolve(data);
     }
   });
 })
   // Promise resolve callback called
   .then((data) => {
     console.log(data.toString());
   })
   // Promise reject callback called
   .catch((err) => {
     console.log(err);
   });