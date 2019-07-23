const ls = window.localStorage;
const prefix = require('../package.json').name;

const lsSet = (key, value) => ls.setItem(`${prefix}-${key}`, value);

const lsGet = key => ls.getItem(`${prefix}-${key}`);

export { ls, lsSet, lsGet };
