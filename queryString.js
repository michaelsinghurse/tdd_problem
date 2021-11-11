function queryStringToObj(queryString) {
  if (typeof queryString !== 'string') {
    throw new Error(`Invalid input: ${queryString}`);
  }

  const decodedString = decodeURIComponent(queryString);

  const output = {};

  const pairs = decodedString.split('&');

  pairs.forEach(pair => {
    const [ key, value ] = pair.split('=');

    const keys = key.split('.');

    let obj = output;

    keys.forEach((k, idx) => {
      // last one
      if (idx === keys.length - 1) {
        obj[k] = value;

      // not the last one
      } else {
        // don't overwrite a value if its already there
        if (obj[k] === undefined) {
          obj[k] = {};
        }
        obj = obj[k];
      }
    });
  });

  return output;
}

module.exports = queryStringToObj;

