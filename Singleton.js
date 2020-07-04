const singleton = {};
singleton.name = "default";
singleton.setName = (name) => singleton.name = name;
const createSingleton = () =>
{
  return singleton;
};

module.exports = createSingleton;
