// /* making the submit handler function
// 1. prevent default
// 2. In the form there is some kind of data. Create a new variable, set it equal to new FormData(event.target)
// 3. The formData.get says go to the form, get the information with the "name" value. 

// */
// // const submitHandler = (event) =>{
// //     event.preventDefault()
// //     // console.log("The form was submitted")
// //     const formData = new FormData(event.target)
// //     const name = formData.get("description")
// //     console.log(name)
// // }

// const submitHandler = (event) =>{
//     event.preventDefault()

//     const form = event.target
//     const formData = new FormData(form)
//     const errors = validateForm(formData)

//     // This part clears all errors
//     const errorElements = document.querySelectorAll(".error")
//     for (let element of errorElements){
//         element.style.display = "none"
//     }

//     // This part displays any new errors
//     Object.keys(errors).forEach((key)=>{
//         //find the specific error element
//         const errorElement = document.querySelector(`#${key}-form .error`)
//         errorElement.innerHTML = errors[key]
//         errorElement.style.display = "block"
//     })
// }

// const main = () =>{
//     const form = document.querySelector("#park-form")
//     form.addEventListener("submit", submitHandler)
    
// }

// window.addEventListener("DOMContentLoaded", main)

// // const parkName = document.querySelector("#name-input").value;
// // console.log(parkName)

// function validateExists(value){
//     return value && value.trim()
// }

// function validateNumber(value){
//     return !isNaN(value)
// }

// function validateRange(value, min, max){
//     return value >= min && value <= max
// }

// function validateForm(formData) {
//     const errors = {};
  
//     // Check if name was entered
//     if (!validateExists(formData.get("name"))) {
//       errors.name = "Please enter a name";
//     }
  
//     // Check if rating was entered
//     if (!validateExists(formData.get("rating"))) {
//       errors.rating = "Please enter a rating";
//     } else{
//         if (!validateNumber(formData.get("rating"))){
//             errors.rating = "Rating must be a number"
//         } else{
//             const rating = Number.parseFloat(formData.get("rating"))
//             if (!validateRange(rating, 1, 5)){
//                 errors.rating = "Rating must be between 1 and 5 inclusive"
//             }
//         }
//     }
  
//     // Check if description was entered
//     if (!validateExists(formData.get("description"))) {
//       errors.description = "Please enter short description";
//     }
  
//     // Check if established date was entered
//     if (!validateExists(formData.get("established"))) {
//       errors.established = "Please enter date";
//     }
  
//     // Check if area was entered
//     if (!validateExists(formData.get("area"))) {
//       errors.area = "Please enter the area of the park";
//     }
  
//     // Check if location date was entered
//     if (!validateExists(formData.get("location"))) {
//       errors.location = "Please enter the location of the park";
//     }
  
//     return errors;
//   }




  
// // If there are no errors
// if (!Object.keys(errors).length) {
//     // Create a new element
//     const parkSection = document.createElement("section");
  
//     // Add the park class
//     parkSection.classList.add("park-display");
  
//     // Construct the HTML for this element
//     const content = `
//       <h2>${formData.get("name")}</h2>
//       <div class="location-display">${formData.get("location")}</div>
//       <div class="description-display">${formData.get("description")}</div>
//       <button class="rate-button" title="Add to Favourites">&#9734;</button>
//       <div class="stats">
//         <div class="established-display stat">
//           <h3>Established</h3>
//           <div class="value">${moment(formData.get("established")).format(
//             "MMMM D, YYYY"
//           )}</div>
//         </div>
//         <div class="area-display stat">
//           <h3>Area</h3>
//           <div class="value">${formData.get("area")}</div>
//         </div>
//         <div class="rating-display stat">
//           <h3>Rating</h3>
//           <div class="value">${formData.get("rating")}</div>
//         </div>
//       </div>
//       `;
  
//     // Set the innerHTML
//     parkSection.innerHTML = content;
  
//     // Append to the main element
//     document.querySelector("main").appendChild(parkSection);
//   }

const submitHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  console.log(name);
};

