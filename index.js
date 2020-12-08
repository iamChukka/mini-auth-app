//console.log('Chuka App Attempt');

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

createTable();
loginBtn.addEventListener('click', handler)

function handler(e) {
  e.preventDefault();
  if (usernameInput.value == "admin" && passwordInput.value == "online") {
    //console.log("Username: " + usernameInput.value);

    //console.log("Password: " + passwordInput.value);
    
    document.getElementById("myTable").style.display = "flex";
    document.getElementById("myForm").style.display = "flex";
    document.getElementById("loginPage").style.display = "none";

  }
  else { 
      alert("Wrong Username or Password ");
  }
}

const tableEntry = {
  description: '',
  amount: '',
  editButton: "<button onclick='handleEdit(event)'>Edit</button>",
  deleteButton: "<button onclick= 'handleDelete(event)'>Delete</button>"
}


let editMode = false;
submitBtn.addEventListener('click', submission)

function submission(e) { 
  const _localTable = window.localStorage.getItem('localTable');
  let tableArray =  _localTable ? JSON.parse(_localTable) : [];

  
  e.preventDefault();
//  console.log("Description: " +descriptionInput.value);
//  console.log("Amount: " + amountInput.value);
  if (descriptionInput.value ==''|| amountInput.value ==''||amountInput.value<0) { 
    return alert("Enter Valid Description and Amount");
  }
 
  
  const table = document.getElementById("table");
  
  if (editMode == false) {
    let row = table.insertRow();
    //let serial = row.insertCell(0);
    // serial.innerHTML = row.rowIndex;
    
    row.insertCell(0);
    
    let description = row.insertCell(1);
    tableEntry.description = descriptionInput.value;
    description.innerHTML = descriptionInput.value;
    

    let amount = row.insertCell(2);
    amount.innerHTML = amountInput.value;
    tableEntry.amount = amountInput.value;

    let editBtn = row.insertCell(3);
    let deleteBtn = row.insertCell(4);

    editBtn.innerHTML = tableEntry.editButton;
    deleteBtn.innerHTML = tableEntry.deleteButton;
    // editBtn.innerHTML = "<button onclick='handleEdit(event)'>Edit</button>";
    // tableEntry.editButton = editBtn.innerHTML;

    // deleteBtn.innerHTML = "<button onclick= 'handleDelete(event)'>Delete</button>";
    // tableEntry.deleteButton = deleteBtn.innerHTML;

    assignSerialNumber();

    // if (tableArray.length==0) {
    //   tableArray[0] = tableEntry;
    // }
    // else {
    //   tableArray[tableArray.length] = tableEntry;
    // }

    console.log('tABLE ENTRY ', tableEntry)
    //tableArray[tableArray.length] = tableEntry;

    //const newTable = [...tableArray, { description: descriptionInput.value, amount: amountInput.value}];
    //console.log('FUCK: ', newTable);
    window.localStorage.setItem('localTable', JSON.stringify([...tableArray, tableEntry]));

  }
  else if (editMode == true) {
    
    table.rows[key].cells[1].innerHTML = descriptionInput.value;
    tableEntry.description = descriptionInput.value;

    table.rows[key].cells[2].innerHTML = amountInput.value;
    tableEntry.amount = amountInput.value;

    tableArray[key-1] = tableEntry;

    window.localStorage.setItem('localTable', JSON.stringify([...tableArray]));

    editMode = false;

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
  
}

function createTable() {
  const _localTable = window.localStorage.getItem('localTable');
  let tableArray = _localTable ? JSON.parse(_localTable) : [];
  
  console.log(tableArray);
  const table = document.getElementById("table");
   let i = 0;
   while(i<tableArray.length){
     let row = table.insertRow();
     
     row.insertCell(0);
    
    let description = row.insertCell(1);
     description.innerHTML = tableArray[i].description;
    

    let amount = row.insertCell(2);
     amount.innerHTML = tableArray[i].amount; 

     let editBtn = row.insertCell(3);
     editBtn.innerHTML = tableArray[i].editButton;

     let deleteBtn = row.insertCell(4);
     deleteBtn.innerHTML = tableArray[i].deleteButton;


     i++
   }

   assignSerialNumber();
}

function handleEdit(event) { 
  editMode = true;
  const table = document.getElementById("table");

  

  const targetRow = event.target.closest("tr");
  const index = targetRow.rowIndex;
  descriptionInput.value = table.rows[index].cells[1].innerHTML;
  amountInput.value = table.rows[index].cells[2].innerHTML;

  key = index;
  //console.log('You Clicked on Edit on ROW ' + index);
}

function handleDelete(event) {
  editMode = false;
  const _localTable = window.localStorage.getItem('localTable');
  let tableArray = _localTable ? JSON.parse(_localTable) : [];

  const table = document.getElementById("table");
  const targetRow = event.target.closest("tr");
  const index = targetRow.rowIndex;

  tableArray.splice(index - 1, index - 1);
  table.deleteRow(index);
  window.localStorage.setItem('localTable', JSON.stringify([...tableArray]));

  assignSerialNumber();
  
  //console.log("you clicked Delete");

}

function assignSerialNumber() { 
  const table = document.getElementById("table");
  //console.log(table.rows.length);

  // Numbering using For Loop
  // for (let i = 1; i < table.rows.length; i++) {
  //    table.rows[i].cells[0].innerHTML = i;
  // }

  //Numbering using while loop
  let i = 1;
  while (i < table.rows.length) { 
    table.rows[i].cells[0].innerHTML = i;
    i++;
  }
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
 
