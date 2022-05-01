const submitHandler = (event) =>{
    event.preventDefault()
    console.log("The form was submitted")
}

const main = () =>{
    const form = document.querySelector("#park-form")
    form.addEventListener("submit", submitHandler)
    
}

window.addEventListener("DOMContentLoaded", main)

const parkName = document.querySelector("#name-input").value;
console.log(parkName)