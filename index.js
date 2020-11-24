console.log('Chuka App Attempt');

let username= document.getElementById("uname").value;
let password = document.getElementById("pword").value;

const form = document.querySelector('form');
const usernameInput = document.querySelector('#uname');
const passwordInput = document.querySelector('#pword');
const loginBtn = document.querySelector('#login'); 

const submitBtn = document.querySelector("#submit");
const descriptionInput = document.querySelector("#desc");
const amountInput = document.querySelector("#amount");

let key = 0;


loginBtn.addEventListener('click', handler)

function handler(e) {
  e.preventDefault();
  if (usernameInput.value == "admin" && passwordInput.value == "online") {
    console.log("Username: " + usernameInput.value);

    console.log("Password: " + passwordInput.value);
    
    document.getElementById("myTable").style.display = "flex";
    document.getElementById("myForm").style.display = "flex";
    document.getElementById("loginPage").style.display = "none";

  }
  else { 
      alert("Wrong Username or Password ");
  }
}

submitBtn.addEventListener('click', submission)

function submission(e) { 
  e.preventDefault();
//  console.log("Description: " +descriptionInput.value);
//  console.log("Amount: " + amountInput.value);
  if (descriptionInput.value ==''|| amountInput.value ==''||amountInput.value<0) { 
    return alert("Enter Valid Description and Amount");
  }
  key++;
  
  const table = document.getElementById("table");

  let row = table.insertRow();
  let serial = row.insertCell(0);
  serial.innerHTML = key;
  let description = row.insertCell(1);
  description.innerHTML = descriptionInput.value;
  let amount = row.insertCell(2);
  amount.innerHTML = amountInput.value;
  let editBtn = row.insertCell(3);
  let deleteBtn = row.insertCell(4);

  // creating button element  
  let edit = document.createElement('BUTTON');
  let del = document.createElement('BUTTON');
                  
  // creating text to be 
  //displayed on button 
  let editText = document.createTextNode("Edit"); 
  let deleteText = document.createTextNode("Delete");
  // appending text to button 
  edit.appendChild(editText); 
  del.appendChild(deleteText);
    
  // appending button to div 
  editBtn.appendChild(edit);
  deleteBtn.appendChild(del);

  descriptionInput.value = '';
  amountInput.value = '';
}

/*
JS 
-FOCUS
-BLUR
-Change
-Click

*/


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
 
