const singleton = {};
let myName = "default";
singleton.setName = (name) => myName = name;
singleton.getName = () => myName;

const createSingleton = () =>
{
  return Object.freeze(singleton);
};

module.exports = createSingleton;
