 # API Calling in React and Typescript With Axios

 # using fetch
 
 //   fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then((response) => response)
  //   .then((e) => e.json())
  //   .then((e) => {
  //     console.log(e)
  //     return setData(e as Itodo[]);
  // })

# Axios API
The Axios API Reference
Promise based HTTP client for the browser and node.js
Requests can be made by passing the relevant config to axios

# Installing
Using npm:
```
$ npm install axios

```

# Response

axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
