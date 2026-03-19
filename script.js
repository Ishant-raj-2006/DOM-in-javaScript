// Create a new button element Give it a text click me Background colour of red and text colour of white Insert the button as the first element inside the body tag.

let newbtn = document.createElement("button")
newbtn.innerText = "Click me !"
newbtn.style.color = "white"
newbtn.style.backgroundColor = "red"
document.querySelector("body").prepend("newbtn")