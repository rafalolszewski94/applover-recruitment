const baseURL = process.env.API_URL || 'https://bench-api.applover.pl';

export const responseCheck = response => {
  if (response.ok) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  error.statusCode = response.status;
  throw error;
};

export const parseJSON = res => res.json();

const Api = (url, options = {}) => {
  if (!url.startsWith('/')) {
    throw new Error('url param does not start with forward slash (/)');
  }

  const defaultOptions = {};
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  const opts = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers
    }
  };

  // Detect is we are uploading a file
  const isFile = opts.body instanceof File;

  // Stringify JSON data
  // If body is not a file
  if (opts.body && typeof opts.body === 'object' && !isFile) {
    opts.body = JSON.stringify(opts.body);
  }

  const path = `${baseURL}${url}`;

  return fetch(path, opts)
    .then(responseCheck)
    .then(parseJSON);
};

export default Api;
