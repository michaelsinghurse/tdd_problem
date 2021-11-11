# TDD Sample Problem

We need to write a function that converts a URL query string into a key-value 
data structure (dict/hashmap/object).

Assume the function is passed only the query string, not the entire URL.

For example, for the URL:
```
https://www.google.com/search?q=tdd&sourceid=chrome&ie=UTF-8
```

The function input is:
```
"q=tdd&sourceid=chrome&ie=UTF-8"
```

And the output should be:
```
{ 'q': 'tdd', 'sourceid': 'chrome', 'ie': 'UTF-8' }
```

The query string also needs to handle nested objects, which are signaled by
'.' in the keys. 


If the query string is
```
"user.name.firstname=John&user.name.lastname=Doe&user.id=123"
```

your method should return:

```
{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'id': '123'
  }
}
```

Other requirements:
- All keys and values are strings. Keep them this way. (Do not cast.)
- Make sure to decode URL character encoding, e.g. `navy%20blue` = `navy blue`

