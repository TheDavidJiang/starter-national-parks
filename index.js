// // // 20.3 How to select elements on the DOM

// // // console.log(document)


// // // Searching for something -> returns the first item that matches

// // const heading = document.querySelector("h1")
// // console.log("heading: " , heading)

// // const valueClass = document.querySelector(".value")
// // console.log("valueClass: ", valueClass)

// // const button = document.querySelector("button")
// // console.log("button: ", button)

// // const areaClass= document.querySelector(".area")
// // console.log("areaClass: ", areaClass)

// // const statDiv = document.querySelector(".rating-display > .value")
// // console.log("statDiv: ", statDiv)

// // const hello = document.querySelector(".hello")
// // console.log(hello)

// // const established = document.querySelector(".stats > .established-display > .value")
// // console.log("established: ", established)

// // //Select ALL queries -> returns a list of all matched elements

// // const buttons = document.querySelectorAll("button")
// // console.log("buttons: ", buttons)

// // // const heading3List = document.querySelectorAll("h3");
// // // for (let element of heading3List){
// // //     console.log(element)
// // // }

// // // const heading3List = document.querySelectorAll("h3");

// // // // Iterate over the list and print each one
// // // for (let element of heading3List.values()) {
// // //   console.log(element);
// // // }

// // const ratings = document.querySelectorAll(".rating-display")
// // // for (let element of ratings.values()){
// // //     console.log(element)
// // // }

// // const list = document.querySelectorAll(".description-display");
// // Array.prototype.forEach.call(list, function (element){
// //     console.log(element)
// // })


// // /////////////////////////////////////////////////////////////20.4 Updating the DOM

// // const descriptions = document.querySelectorAll(".description-display")
// // console.log("descriptions: ", descriptions)


// // // for each description, if the text is longer than 250 characters, slice it.
// // // anything extra: replace with a link.
// // // replace the current description with the updated one.
// // for (let desc of descriptions.values()){
// //     let content = desc.innerText;
// //     if (content.length >= 250){
// //         content = content.slice(0, 250)
// //         content += '<a href="#">...</a>'
// //     }
// //     desc.innerHTML = content
// // }

// // // select all ratings, then change it from a string to a number.
// // // if rating is greater than 4.7, then add the class "high-rating"
// // // and remove the class "value"
// // const ratings = document.querySelectorAll(".rating-display > .value")
// // for (let rating of ratings){
// //     let ratingValue = parseFloat(rating.innerText)
// //     if (ratingValue > 4.7){
// //         rating.classList.add("high-rating")
// //         rating.classList.remove("value")
// //     }
// // }

// // // You can use javascript to add HTML elements
// // const parks = document.querySelectorAll(".park-display")
// // const numberParks = parks.length
// // // create a variable called newElement. Use "createElement("element")" to create an <whateverElement></whateverElement>.
// // const newElement = document.createElement("div")
// // newElement.innerText = `${numberParks} exciting parks to visit`
// // //Add a class to the new element using .classList.add("the-class")
// // newElement.classList.add("header-satatement")
// // // select the <header> element, add the new element to it using .appendChild(theNewThing)
// // const headerz = document.querySelector("header")
// // headerz.appendChild(newElement)



// // //You can remove elements using .removeChild()
// // // If you wanted to remove the first park:

// // // get the parent element
// // const main = document.querySelector("main")
// // // get a single park
// // const park = main.querySelector(".park-display")
// // // remove it
// // main.removeChild(park)

// ////////////////////////////////////////// 20.5 Event Listeners

// // //select an element
// // const firstBtn = document.querySelector("button")
// // // .addEventListener() takes 2 arguments: the name of the event in quotes, and a callback function
// // // that executes the action.
// // firstBtn.addEventListener("click", (event)=>{
// //     console.log("You clicked the button", event)
// // })


// // // "event" is an object.
// // firstBtn.addEventListener("click", (event)=>{
// //     console.log(event.target)
// // })


// // // each event.target has a unique parent. That way, even though you have the same button multiple times
// // // on the page, it knows which button you pressed.
// // const allBtns = document.querySelectorAll(".rate-button")
// // allBtns.forEach((btn)=>{
// //     btn.addEventListener("click", (event)=>{
// //         console.log(event.target)
// //     })
// // })


// // // this action logs the parent of the button that you pressed, which is the "section" element.
// // const allBtns = document.querySelectorAll(".rate-button")
// // allBtns.forEach((btn) => {
// //     btn.addEventListener("click", (event) => {
// //       console.log(event.target.parentNode);
// //     });
// //   });


// // therefore you can do specific things to the parent node.
// // when you click on the button, change the backgroundColor to "#c8e6c9"
// const allBtns = document.querySelectorAll(".rate-button")
// allBtns.forEach((btn)=>{
//     btn.addEventListener("click", (event)=>{
//         const park = event.target.parentNode;
//         park.style.backgroundColor = "#c8e6c9"
//     })
// })


// // // when you click on a link, it goes to that link. If your site refreshes, you don't get to see the console.
// // // you can prevent the page from refreshing by adding event.preventDefault() to the event
// // const nameSorter = document.querySelector("#name-sorter")
// // nameSorter.addEventListener("click", (event)=>{
// //     event.preventDefault()
// //     console.log("You clicked on the name sorter")
// // })


// // if you wanted to sort by name:
// /* 
// 1. Get the <main> element that has all the parks
// 2. Get a NodeList of all the parks
// 3. Make the <main> element empty
// 4. Convert the NodeList into an actual array.
// 5. Sort the array by name
// 6. Iterate through the sorted array, and append each park to <main>
// */
// // const nameSorter = document.querySelector("#name-sorter")
// // nameSorter.addEventListener("click", (event)=>{
// //     event.preventDefault()
// //     const main = document.querySelector("main")
// //     const parksList = main.querySelectorAll(".park-display")
// //     main.innerHTML = ""

// //     // even though you made <main> empty, you saved the parks in the parksList variable.
// //     // you can access it using Array.from(). This takes an array-like structure and makes in
// //     // into an actual array.
// //     const parksArray = Array.from(parksList)
// //     console.log(parksArray)

// //     // write a function that sorts the array. Given 2 park elements, find the name of each park and compare the names.
// //     // The names are the innerText of the <h2> element of each park.
// //     parksArray.sort((parkA, parkB)=>{
// //         const parkAName = parkA.querySelector("h2").innerText;
// //         const parkBName = parkB.querySelector("h2").innerText;
// //         if (parkAName < parkBName){
// //             return -1
// //         } else if (parkAName > parkBName){
// //             return 1
// //         } else{
// //             return 0
// //         }
// //     });

// //     parksArray.forEach((park)=>{
// //         main.appendChild(park)
// //     })
// // })

// // // To refactor the code: create an external function for the event handler, another for sorting.
// let counter = 0
// const sortByName = (parkA, parkB) =>{
//     const parkAName = parkA.querySelector("h2").innerText;
//     console.log(parkAName)
//     counter ++
//     console.log(counter)
//     const parkBName = parkB.querySelector("h2").innerText
//     console.log(parkBName)
//     counter ++
//     console.log(counter)
//     if (parkAName < parkBName){
//         counter += 2
//         console.log(counter)
//         return -1;
//     } else if (parkAName > parkBName){
//         counter += 3
//         console.log(counter)
//         return 1;
//     }else{
//         counter ++
//         console.log(counter)
//         return 0
//     }
// }

// const nameSorterClickHandler = (event)=>{
//     event.preventDefault()

//     const main = document.querySelector("main")
//     const parksList = document.querySelectorAll(".park-display")
//     main.innerHTML = ""
//     parksArray = Array.from(parksList)

//     parksArray.sort(sortByName)
//     parksArray.forEach((park)=>{
//         main.appendChild(park)
//     })
// }

// const nameSorter = document.querySelector("#name-sorter")
// nameSorter.addEventListener("click", nameSorterClickHandler)

// const sortByRating = (parkA, parkB) =>{
//     const parkARating = parkA.querySelector(".rating-display > .value").innerText;
//     const parkBRating = parkB.querySelector(".rating-display > .value").innerText;
//     if (parkARating < parkBRating){
//         return -1
//     } else if (parkARating > parkBRating){
//         return 1
//     } else{
//         return 0
//     }
// }

// const ratingSorterEventHandler = (event) =>{
//     event.preventDefault()

//     const main = document.querySelector("main")
//     const parksList = document.querySelectorAll(".park-display")
//     main.innerHTML = ""
//     parksArray = Array.from(parksList)

//     parksArray.sort(sortByRating)
//     parksArray.forEach((park)=>{
//         main.appendChild(park)
//     })
// }

// const ratingSorter = document.querySelector("#rating-sorter")
// ratingSorter.addEventListener("click", ratingSorterEventHandler)



// console.log("Before!");

// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("Loaded!");
// });

// console.log("After!");

///////////////////////20.6 Form submissions
/* 
The "submit" event fires when a user submits a form. This goes on
the <form> button itself, not on any button on the form.
Afterwards, you can put a handler function for the submit event.
*/