function consumeService(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw (`Error! Status: ${response.status}`);
    }
    return response.json();
  });
}

consumeService("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((e) => console.error(e));
