//console.log('Chuka App Attempt');

let username= document.getElementById("uname").value;
let password = document.getElementById("pword").value;

const form = document.querySelector('form');
const usernameInput = document.querySelector('#uname');
const passwordInput = document.querySelector('#pword');
const loginBtn = document.querySelector('#login'); 

const submitBtn = document.querySelector("#submit");
const logoutBtn = document.querySelector("#logoutButton");
const descriptionInput = document.querySelector("#desc");
const amountInput = document.querySelector("#amount");

let key;
//const records = localStorage.getItem('records');
// records = { admin: [...], chukaLogin: [...] };

const person = [
  {
    username: 'admin',
    password: 'online',
  },
  {
    username: 'chukaLogin',
    password: 'try',
  }
]

const tableEntry = {
  description: '',
  amount: '',
  editButton: "<button onclick='handleEdit(event)'>Edit</button>",
  deleteButton: "<button onclick= 'handleDelete(event)'>Delete</button>"
}


let globalUsername;
let globalPassword;
let userTable;

let page;
let tableArray;

let editMode = false;

loginBtn.addEventListener('click', handler)

submitBtn.addEventListener('click', submission)

logoutBtn.addEventListener('click', logouthandler)


reload();
function reload() {
  username = window.localStorage.getItem("session");
  page = window.localStorage.getItem("page");
  if (username == '') {
    document.getElementById("myTable").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("logout").style.display = "none";
  }
  else if (page == 2) { 
    document.getElementById("myTable").style.display = "flex";
    document.getElementById("myForm").style.display = "flex";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("logout").style.display = "inline";
    globalUsername = username;
    createTable();
  }
}



function logouthandler(e) {
  e.preventDefault();
  const table = document.getElementById("table");
  let i = 1
  while (i < table.rows.length) { 
    table.deleteRow(i);
  }

  
  username = window.localStorage.getItem("session");
  document.getElementById("myTable").style.display = "none";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("logout").style.display = "none";
  alert("You are Logged out of " + username + "'s session");
        
  username = '';
  window.localStorage.setItem("session", username);
  page = 1
  window.localStorage.setItem("page", page);

}

function handler(e) {
  e.preventDefault();
  const records = localStorage.getItem('records');
  userTable = JSON.parse(records);
  globalUsername = getAccount(usernameInput.value, passwordInput.value);
 
    createTable();
  usernameInput.value = '';
  passwordInput.value = '';
  page = 2
  window.localStorage.setItem("page", page);
}

function submission(e) { 
  const records = localStorage.getItem('records');
  userTable =JSON.parse(records);
  const _localTable = userTable;//window.localStorage.getItem('localTable');
   tableArray =  _localTable ? _localTable : [];
  
  e.preventDefault();

  if (descriptionInput.value ==''|| amountInput.value ==''||amountInput.value<0) { 
    return alert("Enter Valid Description and Amount");
  }
  
  const table = document.getElementById("table");
  
  if (editMode == false) {
    let row = table.insertRow();
    
    
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
    

    assignSerialNumber();
    if (tableArray[globalUsername] == null) {
      tableArray[globalUsername] = [tableEntry];

    } else { 
      console.log("This is one new row" + JSON.stringify(tableEntry));
      console.log("This is pre-additions" + JSON.stringify(tableArray[globalUsername]));

      tableArray[globalUsername] = [...tableArray[globalUsername], tableEntry];
      // myNewTable = JSON.stringify([tableArray[globalUsername], tableEntry]);
      // console.log(myNewTable);
    }
    console.log(tableArray);
        
 
    window.localStorage.setItem('records', JSON.stringify(tableArray));
    
  }
  else if (editMode == true) {
    
    table.rows[key].cells[1].innerHTML = descriptionInput.value;
    tableEntry.description = descriptionInput.value;

    table.rows[key].cells[2].innerHTML = amountInput.value;
    tableEntry.amount = amountInput.value;
    
    tableArray[globalUsername][key-1] = tableEntry;
    
    window.localStorage.setItem('records', JSON.stringify(tableArray));


    editMode = false;

  }
 

  descriptionInput.value = '';
  amountInput.value = '';
  
}

function getAccount(username,password) { 
  for (let i = 0; i < person.length; i++) {
    if (person[i].username == username && person[i].password == password) {
      document.getElementById("myTable").style.display = "flex";
      document.getElementById("myForm").style.display = "flex";
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("logout").style.display = "inline";
      alert('You are Logged in as ' + username);
        
      window.localStorage.setItem("session", username);
        return username;
    
      }
    }
  
  return alert('Please Check Username and Password');

 
}

function createTable() {
  const records = localStorage.getItem('records');
  userTable =JSON.parse(records);
  const _localTable = userTable[globalUsername];//window.localStorage.getItem('localTable');
  let tableArray = _localTable ? _localTable : [];
  
  //console.log(tableArray);
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
  const records = localStorage.getItem('records');
  userTable =JSON.parse(records);
  const _localTable = userTable;//window.localStorage.getItem('localTable');
  let tableArray = _localTable ? _localTable : [];

  const table = document.getElementById("table");
  const targetRow = event.target.closest("tr");
  const index = targetRow.rowIndex;

  tableArray[globalUsername].splice(index - 1, 1);
  
  window.localStorage.setItem('records', JSON.stringify(tableArray));
  console.log(index);

  table.deleteRow(index);
  assignSerialNumber();
  

}

function assignSerialNumber() { 
  const table = document.getElementById("table");
  
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
