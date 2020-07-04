const s = require("./Singleton")();
const s2 = require("./Singleton")();
console.log(s);
console.log(s2);
s2.setName("s2");
console.log(s);
console.log(s2);
