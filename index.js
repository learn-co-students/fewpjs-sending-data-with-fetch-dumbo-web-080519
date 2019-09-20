// Add your code here
let userForm = document.querySelector("#userForm")


userForm.addEventListener("submit", function(evt){
  evt.preventDefault()
  console.log(evt);
    let userInput = {
      userName: evt.target.userName.value,
      userEmail: evt.target.userEmail.value
    }
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userInput)
    })
    .then(resp => resp.json())
    .then(respObj => console.log(respObj))
  })
