const s = require("./Singleton")();
const s2 = require("./Singleton")();
console.log(s.getName());
console.log(s2.getName());
s2.setName("s2");
console.log(s.getName());
console.log(s2.getName());
