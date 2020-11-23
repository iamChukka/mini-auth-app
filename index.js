console.log('Chuka App Attempt');

//CamelNotation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour

//FACTORY FUNCTIONS
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// const myCircle = createCircle(1);

// //CONSTRUCTOR FUNCTIONS
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for (let key in circle)
//     console.log(key, circle[key]);
    
// for (let key of Object.keys(circle))
//     console.log(key);


let username= document.getElementById("uname").value;
let password = document.getElementById("pword").value;

const form = document.querySelector('form');
const usernameInput = document.querySelector('#uname');
const passwordInput = document.querySelector('#pword');
const submitBtn = document.querySelector('#submit'); 

submitBtn.addEventListener('click',handler)

function handler(e) {
  e.preventDefault();
  if (usernameInput.value == "admin" && passwordInput.value == "online") {
    console.log("Username: " + usernameInput.value);

    console.log("Password: " + passwordInput.value);
    
    document.getElementById("myTable").style.display = "flex";
    document.getElementById("myForm").style.display = "flex";
    document.getElementById("login").style.display = "none";

  }
  else { 
      alert("Wrong Username or Password ");
  }
}

// const handler = (e) => {
//   e.preventDefault();
//   if (usernameInput.value == "admin" && passwordInput.value == "online") {
//     console.log("Username: " + usernameInput.value);

//     console.log("Password: " + passwordInput.value);
    
//     document.getElementById("myTable").style.display = "block";
//     document.getElementById("myForm").style.display = "block";
//     document.getElementById("login").style.display = "none";

//   }
//   else { 
//       alert("Wrong Username or Password ");
//   }
// }

