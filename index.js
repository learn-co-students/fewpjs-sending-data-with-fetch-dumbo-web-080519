// Add your code here


debugger;

console.log("hi");

function submitData(name, email) {
  fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: name, email: email})
  })
  .then(resp => resp.json())
  .then(console.log);
};


submitData("matt", "matt@matt.com");
