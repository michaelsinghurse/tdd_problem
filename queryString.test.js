const queryStringToObj = require('./queryString');

describe('queryStringToObj', () => {
  test('is a function', () => {
    const actual = typeof queryStringToObj;
    expect(actual).toBe('function');
  });

  test('returns an empty object when passed an empty string', () => {
    const actual = queryStringToObj('');
    expect(actual).toEqual({});
  });

  test('throws an error if passed a non-string', () => {
    expect(() => {
      queryStringToObj();
    }).toThrow();

    expect(() => {
      queryStringToObj(null);
    }).toThrow();

    expect(() => {
      queryStringToObj([]);
    }).toThrow();

    expect(() => {
      queryStringToObj({});
    }).toThrow();

    expect(() => {
      queryStringToObj(111);
    }).toThrow();
  });

  test('handles a very simple query', () => {
    const actual = queryStringToObj('foo=1');

    expect(actual).toEqual({ foo: '1' });
  });

  test('handles a query with an ampersand', () => {
    const actual = queryStringToObj('foo=1&bar=2');

    expect(actual).toEqual({ 
      foo: '1',
      bar: '2'
    });
  });

  test('handles a query with multiple ampersands', () => {
    const actual = queryStringToObj('foo=1&bar=2&baz=3&bang=4');

    expect(actual).toEqual({ 
      foo: '1',
      bar: '2',
      baz: '3',
      bang: '4'
    });
  });

  test('decodes escape sequences properly', () => {
    const actual = queryStringToObj('x=test%3F&q=search%20query%20%28correct%29');

    expect(actual).toEqual({
      x: 'test?',
      q: 'search query (correct)'
    });
  });

  test('handles case when a value is a basic object', () => {
    const actual = queryStringToObj('user.name=Zofia&user.age=4');

    expect(actual).toEqual({
      user: {
        name: 'Zofia',
        age: '4'
      }
    });
  });

  test('parses the example provided', () => {
    const qStr = 'user.name.firstname=John&user.name.lastname=Doe' +
      '&user.id=123';
    const actual = queryStringToObj(qStr);

    expect(actual).toEqual({
      user: {
        name: {
          firstname: 'John',
          lastname: 'Doe'
        },
        id: '123'
      }
    });
  });
});

