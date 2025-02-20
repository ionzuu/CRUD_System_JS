"use strict";

const user1 = {
  userID: 12345,
  user: "Admin",
  firstname: 'Jona',
  lastname: 'costilla',
  password: "12345",
  role: "manager",
  logged: 0,
};

const user2 = {
  userID: 91234,
  user: "Peter",
  firstname: 'Jona',
  lastname: 'costilla',
  password: "12345",
  role: "manager",
  logged: 0,
};
const user3 = {
  userID: 23456,
  user: "John",
  firstname: 'Jona',
  lastname: 'costilla',
  password: "12345",
  role: "manager",
  logged: 0,
};
const user4 = {
  userID: 34567,
  user: "Quagmire",
  firstname: 'Jona',
  lastname: 'costilla',
  password: "12345",
  role: "manager",
  logged: 0,
};

let employees = [
  {
    employeeID: 1000,
    firstname: 'Jonathan',
    lastname: 'Costilla',
    role: 'General Manager',
    payrate: 20,
  },
  {
    employeeID: 1001,
    firstname: 'Jonathan',
    lastname: 'Cotula',
    role: 'Shift Manager',
    payrate: 14,
  },
  {
    employeeID: 1002,
    firstname: 'Rubem',
    lastname: 'Mendiola',
    role: 'Team Member',
    payrate: 13,
  },
  {
    employeeID: 1003,
    firstname: 'Carlosky',
    lastname: ' Rebsoski',
    role: 'Production',
    payrate: 12,
  },
{
    employeeID: 1004,
    firstname: 'Anjy',
    lastname: 'Rdz',
    role: 'Shift Manager',
    payrate: 15,
  },
{
    employeeID: 1005,
    firstname: 'Dex',
    lastname: 'Lao',
    role: 'Shift Manager',
    payrate: 12,
  },
{
    employeeID: 1006,
    firstname: 'Lain',
    lastname: 'dela',
    role: 'Host',
    payrate: 12,
  },
{
    employeeID: 1007,
    firstname: 'Mon',
    lastname: 'Fernandez',
    role: 'Developer',
    payrate: 22,
  },
{
    employeeID: 1008,
    firstname: 'Dante',
    lastname: 'Aligheri',
    role: 'HR',
    payrate: 15,
  },
{
    employeeID: 1009,
    firstname: 'Ser',
    lastname: 'Costilla',
    role: 'Shift Manager',
    payrate: 12,
  },
{
    employeeID: 1010,
    firstname: 'Kim',
    lastname: 'Rod',
    role: 'Owner',
    payrate: 50,
  },
]

const users = [user1, user2, user3, user4];
const login = document.getElementById("login");
const formlogin = document.querySelector('.login')
const menu = document.querySelector('.menu')
const hiddenobj = document.querySelectorAll(".hidden");
const sects = document.querySelector('.sections');
const intro = document.querySelector('.intro');
const profile = document.querySelector('.profile');
const employ = document.querySelector('.employees');
const about = document.querySelector('.about');
const tableemploy = document.getElementById('tableemployees')
let currentAccountIndex;
let currentAccount;

login.addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.getElementById("iduser");
  const pass = document.getElementById("passuser");

  currentAccount = users.find((user) => user.userID === Number(id.value));
  currentAccountIndex = users.findIndex((user) => user.userID === Number(id.value));

  if (
    Number(id.value) === currentAccount?.userID &&
    pass.value === currentAccount.password
  ) {
    console.log("User logged in: ", currentAccount);
    formlogin.classList.remove('active');
    formlogin.classList.add('hidden');
    sects.classList.remove("hidden");
    sects.classList.add("active");
    menu.classList.remove("hidden");
    menu.classList.add("active");

    welcome();
    }
    else{
      alert('Credentials incorrect!!!')
      id.value=""
      pass.value=""
    }
});

const welcome = () => {
  document.querySelector('.intro').classList.remove('hidden')
  const welcometitle = document.querySelector(".welc");
  // console.log(welcometitle);
    if(currentAccount.logged == 0){
      welcometitle.textContent = `Welcome ${currentAccount.user}`
      currentAccount.logged = 1;
    users[currentAccountIndex].logged = 1;
    }
    else{
      welcometitle.textContent = `Welcome back ${currentAccount.user}`;
    }
    // console.log(welcometitle);
  clock();
};

const clock = () => {
  const clock = document.getElementById("clock");
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  clock.textContent = `${hours} : ${minutes} : ${seconds}`;
};

setInterval(clock, 1000); // Update every second

const employeessection = document.getElementById("employees");
const profilesection = document.getElementById("profile");
const aboutsection = document.getElementById("about");
const logout = document.getElementById("logout");
let idE;

logout.addEventListener('click', () => {
  employ.classList.remove('active');
  profile.classList.remove('active');
  intro.classList.remove('active')
  about.classList.remove('active')
  employ.classList.add('hidden');
  profile.classList.add('hidden');
  intro.classList.add('hidden')
  about.classList.add('hidden')
  formlogin.classList.add('active');
    formlogin.classList.remove('hidden');
    sects.classList.add("hidden");
    sects.classList.remove("active");
    menu.classList.add("hidden");
    menu.classList.remove("active");
  employeessection.classList.remove('clickedsection');
  profilesection.classList.remove('clickedsection');
  aboutsection.classList.remove('clickedsection')
  const id = document.getElementById("iduser");
  const pass = document.getElementById("passuser");
      id.value="";
      pass.value="";  
})

aboutsection.addEventListener("click", ()=>{
  employeessection.classList.remove('clickedsection');
  profilesection.classList.remove('clickedsection');
  aboutsection.classList.add('clickedsection')
  intro.classList.add('hidden');
  employ.classList.add('hidden');
  profile.classList.add('hidden');
  intro.classList.remove('active')
  employ.classList.remove('active');
  profile.classList.remove('active');
  about.classList.remove('hidden');
  about.classList.add('active');
})

employeessection.addEventListener('click', ()=>{
  tableemploy.innerHTML="";
  console.log('Employee section active');
    intro.classList.add('hidden');
    employ.classList.remove('hidden');
    intro.classList.remove('active');
    employ.classList.add('active');
    profile.classList.remove('active');
    profile.classList.add('hidden')
    employeessection.classList.add('clickedsection');
    profilesection.classList.remove('clickedsection');
    about.classList.add('hidden');
    aboutsection.classList.remove('clickedsection');
  showEmpployees();
})

profilesection.addEventListener('click', () => {
  const firstname = document.getElementById('firstnameprofile');
  const lastname = document.getElementById('lastnameprofile');
  const role = document.getElementById('roleprofile');
  const user = document.getElementById('userprofile');
  employeessection.classList.remove('clickedsection');
  intro.classList.add('hidden');
  employ.classList.add('hidden');
  aboutsection.classList.remove('clickedsection');
  employ.classList.remove('active');
  profile.classList.remove('hidden');
  profile.classList.add('active');
  profilesection.classList.add('clickedsection');
  user.value = currentAccount?.userID;
  firstname.value = currentAccount?.firstname;
  lastname.value = currentAccount?.lastname;
  role.value = currentAccount?.role;
  about.classList.remove('active');
  about.classList.add('hidden');
})


const buttonedit = document.getElementById('addemployeebtn');
const showEmpployees = () => {
  for (let i = 0; i < employees.length; i++) {
    if (i === employees.length - 1) {
      tableemploy.innerHTML += `
      <tr id=${i}>
      <th>${employees[i].employeeID}</th>
      <th class="employeesectt">${employees[i].firstname}</th>
      <th class="employeesectt">${employees[i].lastname}</th>
      <th class="employeesectt">${employees[i].payrate}</th>
      <th class="employeesectt">${employees[i].role}</th>
      <th><button value='${i}' class="EdiEmp">Edit</button><button value='${i}' class="DelEmp">Delete</button></th>
      </tr>
      `;
    } else {
      tableemploy.innerHTML += `
      <tr id=${i}>
      <th class="employeesectt">${employees[i].employeeID}</th>
      <th class="employeesectt">${employees[i].firstname}</th>
      <th class="employeesectt">${employees[i].lastname}</th>
      <th class="employeesectt">$${employees[i].payrate}</th>
      <th class="employeesectt">${employees[i].role}</th>
      <th class="employeesectt"><button value='${i}' class="EdiEmp">Edit</button><button value='${i}' class="DelEmp">Delete</button></th>
      </tr>
      `;
    }
  }
  // Add event listeners for all "Edit" buttons
  const EditEmployeeButtons = document.querySelectorAll('.EdiEmp');
  const DeleteEmployeeButtons = document.querySelectorAll('.DelEmp');
  
  DeleteEmployeeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const employeeIndex = e.target.value;
      console.log(`Editing employee at index: ${employeeIndex}`);
      employees.splice(employeeIndex, 1);
      closeModal();
      tableemploy.innerHTML="";
      showEmpployees();
    });
  });

  EditEmployeeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const employeeIndex = e.target.value;
      console.log(`Editing employee at index: ${employeeIndex}`);
      
      buttonedit.value = 1;
      const firstname = document.getElementById('firstname');
      const lastname = document.getElementById('lastname');
      const payrate = document.getElementById('payrate');
      const role = document.getElementById('role');
      
      console.log('Clicked', EditEmployeeButtons.value)
      openModal();
      e.preventDefault();
      idE = Number(e.target.value);
      console.log(idE)
      document.querySelector('.editempltitle').innerHTML = 'Edit Employee';
      firstname.value = employees[idE].firstname;
      lastname.value = employees[idE].lastname;
      payrate.value =employees[idE].payrate ;
      role.value =employees[idE].role;
      buttonedit.innerHTML = 'Edit Employee';
    })
    
});
};
// 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const btnsOpenModal = document.querySelectorAll('.newemployeebtn');
console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].addEventListener('click', openModal));
  const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const payrate = document.getElementById('payrate');
    const role = document.getElementById('role');
    firstname.value='';
    lastname.value='';
    role.value='';
    payrate.value='';

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Escape' ||
    (e.key === 'Delete' && !modal.classList.contains('hidden'))
  ) {
    console.log('Esc was pressed');
    closeModal();
  }
});

const addemployeeaction = document.getElementById('addemployeebtn');

addemployeeaction.addEventListener('click', (e) => {
  e.preventDefault()
  
  if (buttonedit.value === '0'){
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const payrate = document.getElementById('payrate');
    const role = document.getElementById('role');
  
    let emlenght = employees.length;
    emlenght = emlenght-1;
    emlenght = employees[emlenght].employeeID
    const newID = emlenght+1 
    const newEmployee = {
    employeeID: newID,
    firstname: firstname.value,
    lastname: lastname.value,
    role: role.value,
    payrate: payrate.value,
    }
    alert('Employee Added!');
    console.log(newEmployee);
    employees.push(newEmployee)
    console.log(employees)
    firstname.value='';
    lastname.value='';
    role.value='';
    payrate.value='';
    closeModal();
    tableemploy.innerHTML="";
    showEmpployees();
  }
  else if( buttonedit.value === '1'){
    e.preventDefault();
    const firstname = document.getElementById('firstname');
  const lastname = document.getElementById('lastname');
  const payrate = document.getElementById('payrate');
  const role = document.getElementById('role');
    console.log('function edited send it', addemployeeaction.value , idE);
    console.log(firstname.value)
    console.log(lastname.value)
    console.log(payrate.value)
    console.log(role.value)
    console.log(employees[idE].firstname)
    console.log(employees[idE].lastname)
    console.log(employees[idE].payrate)
    console.log(employees[idE].role)
    employees[idE].firstname = firstname.value;
    employees[idE].lastname = lastname.value;
    employees[idE].payrate = payrate.value;
    employees[idE].role = role.value;
    alert('Employee Edited!');
    firstname.value='';
    lastname.value='';
    role.value='';
    payrate.value='';
    closeModal();
    tableemploy.innerHTML="";
    showEmpployees();
buttonedit.value = 0
  }
})