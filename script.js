let employees = [];

document.querySelector("#addUser").addEventListener('click', addEmployee);


function addEmployee(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const profession = document.getElementById("prof").value;
  const age = document.getElementById("age").value;


  if (name.trim() === '' || prof.trim() === '' || age.trim() === '') {
    document.getElementById("error").innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
    document.getElementById("success").innerHTML = "";
    return
  }


    const id = employees.length + 1;

    const employee = { id, name, prof, age };

    employees.push(employee);
    document.getElementById("success").innerHTML = "Succes :Employee Added!";
    document.getElementById("error").innerHTML = "";

    displayEmployee();

  document.querySelector("form").reset();

}


function displayEmployee() {

  const addedEmployeesContainer = document.getElementById("addedEmployee");
  addedEmployeesContainer.innerHTML = ' ';


  employees.forEach(employee => {
    const employeeOuterContainer = document.createElement('div');
    employeeOuterContainer.className = 'employeeOuterContainer';


    const employeeCard = document.createElement('div');
    employeeCard.className = 'emCard';


    const idSpan = document.createElement('span');
    idSpan.innerText = `${employee.id}.`;
    employeeCard.appendChild(idSpan);

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `Name : ${employee.name}`;
    employeeCard.appendChild(nameSpan);

    const professionSpan = document.createElement('span');
    professionSpan.textContent = `Prof : ${employee.prof}`;
    employeeCard.appendChild(professionSpan);

    const ageSpan = document.createElement('span');
    ageSpan.textContent = `Age : ${employee.age}`;
    employeeCard.appendChild(ageSpan);

    employeeOuterContainer.appendChild(employeeCard);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-employee-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      const index = employees.findIndex(emp => emp.id === employee.id);
      employees.splice(index, 1);

      displayEmployee();
    });

    employeeOuterContainer.appendChild(deleteButton);

    addedEmployeesContainer.appendChild(employeeOuterContainer);

  });

}