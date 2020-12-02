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

let key;


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
let editMode = false;
submitBtn.addEventListener('click', submission)

function submission(e) { 
  e.preventDefault();
//  console.log("Description: " +descriptionInput.value);
//  console.log("Amount: " + amountInput.value);
  if (descriptionInput.value ==''|| amountInput.value ==''||amountInput.value<0) { 
    return alert("Enter Valid Description and Amount");
  }
 
  
  const table = document.getElementById("table");
  if (editMode == false) {
    let row = table.insertRow();
    let serial = row.insertCell(0);
    serial.innerHTML = row.rowIndex;
    let description = row.insertCell(1);
    description.innerHTML = descriptionInput.value;
    let amount = row.insertCell(2);
    amount.innerHTML = amountInput.value;

    let editBtn = row.insertCell(3);
    let deleteBtn = row.insertCell(4);

    editBtn.innerHTML = "<button onclick='handleEdit(event)'>Edit</button>";
    deleteBtn.innerHTML = "<button onclick= 'handleDelete(event)'>Delete</button>";
  }
  else if (editMode == true) {
    
    table.rows[key].cells[1].innerHTML = descriptionInput.value;
    table.rows[key].cells[2].innerHTML= amountInput.value;
    

  }
  //deleteBtn.onclick = handleDelete();

  /* // creating button element  
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

  editBtn.addEventListener('click', editRow);
  
  deleteBtn.addEventListener('click', deleteRow); */

  descriptionInput.value = '';
  amountInput.value = '';
  editMode = false;
}

function handleEdit(event) { 
  editMode = true;
  const table = document.getElementById("table");
  

  const targetRow = event.target.closest("tr");
  const index = targetRow.rowIndex;
  descriptionInput.value = table.rows[index].cells[1].innerHTML;
  amountInput.value = table.rows[index].cells[2].innerHTML;

  key = index;
  console.log('You Clicked on Edit on ROW ' + index);
}

function handleDelete(event) {
  editMode = false;

  const targetRow = event.target.closest("tr");
    const index = targetRow.rowIndex;
    document.getElementById("table").deleteRow(index);
  console.log("you clicked Delete");

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
 
