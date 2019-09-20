let jsonifyTheResponse = (res => res.json())
body = document.querySelector("body")
let formData = {
	name: "Steve",
	email: "steve@steve.com"
};

// method: "POST" is missing from the object below
let configObj = {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	},
	body: JSON.stringify(formData)
};

function submitData(stuff){
	return fetch("http://localhost:3000/users", stuff)
	.then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}

function slapOnTheDom(item){
	body.append(item.id)
}

submitData(configObj)