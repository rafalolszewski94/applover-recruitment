const prefix = require('../package.json').name;

const lsGet = key => {
  return window.localStorage.getItem(`${prefix}-${key}`);
};

const asyncLsSet = async (key, value) => {
  await null;
  return window.localStorage.setItem(`${prefix}-${key}`, value);
};

const asyncLsGet = async key => {
  await null;
  return window.localStorage.getItem(`${prefix}-${key}`);
};

const asyncLsRemove = async key => {
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

export {
  lsGet,
  asyncLsSet,
  asyncLsGet,
  asyncLsRemove,
  ssSet,
  ssGet,
  ssRemove,
  localAndSessionGet
};
