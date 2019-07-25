const prefix = require('../package.json').name;

const lsSet = async (key, value) => {
  await null;
  return window.localStorage.setItem(`${prefix}-${key}`, value);
};

const lsGet = async key => {
  await null;
  return window.localStorage.getItem(`${prefix}-${key}`);
};

const lsRemove = async key => {
  await null;
  return window.localStorage.removeItem(`${prefix}-${key}`);
};

const ssSet = async (key, value) => {
  await null;
  return window.sessionStorage.setItem(`${prefix}-${key}`, value);
};

const ssGet = async key => {
  await null;
  return window.sessionStorage.getItem(`${prefix}-${key}`);
};

const ssRemove = async key => {
  await null;
  return window.sessionStorage.removeItem(`${prefix}-${key}`);
};

const localAndSessionGet = async key => {
  let result;
  await null;
  if (localStorage.getItem(`${prefix}-${key}`)) {
    result = window.localStorage.getItem(`${prefix}-${key}`);
  } else {
    result = window.sessionStorage.getItem(`${prefix}-${key}`);
  }
  return result;
};

export { lsSet, lsGet, lsRemove, ssSet, ssGet, ssRemove, localAndSessionGet };
