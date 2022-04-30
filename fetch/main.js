const URL = "https://jsonplaceholder.typicode.com/users";
fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.map((user) => user.name));
  });
/========================================/
async function doStuff() {
  const response = await fetch(URL);
  const users= await response.json()
  console.log(users.map(user=>user.name))
}

doStuff();
