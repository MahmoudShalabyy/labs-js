

let left=document.getElementById("left");
let right=document.getElementById("right");
let stop=document.getElementById("stop");
let start=document.getElementById("start");


let img = document.images[0];
let count = 1;
let interval;

right.onclick = rightSlide;

left.onclick = () => {
    count--;
    if (count < 1) count = 2;
    img.src = `${count}.jpg`;
  };

  function rightSlide() {
    count++;
    if (count > 2) count = 1;
    img.src = `${count}.jpg`;
  }

start.onclick = () => {
  interval = setInterval(rightSlide, 1500); 
};

stop.onclick = () => {
    clearInterval(interval); 
  };

//***************************************************************************************** */

let nameInput = document.getElementById("name");
let gradeInput = document.getElementById("grade");
let error = document.getElementById("error");
let table = document.getElementById("table");
let form = document.getElementById("form");
let students = [];

form.onsubmit = (e) => {
  e.preventDefault();

  let name = nameInput.value.trim();
  let grade = gradeInput.value.trim();

  if (!name || isNaN(grade) || grade < 0 || grade > 100 || isRepeated(name)) {
    showError("invalid input or repeated name");
    return;
  }

  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  students.push({ name, grade: Number(grade) });

  updateTable();

  nameInput.value = "";
  gradeInput.value = "";
};

function isRepeated(name) {
  name = name.toLowerCase();
  return students.some((s) => s.name.toLowerCase() === name);
}

function showError(msg) {
  error.textContent = msg;
  error.style.display = "inline";
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
}

function updateTable() {
    let tbody = table.tBodies[0];
    tbody.innerHTML = "";
  
    students.forEach((s, i) => {
      let tr = document.createElement("tr");
  
      let tdName = document.createElement("td");
      tdName.innerText = s.name;
  
      let tdGrade = document.createElement("td");
      tdGrade.innerText = s.grade;
  
      let tdDelete = document.createElement("td");
      let delBtn = document.createElement("button");
      delBtn.innerText = "Delete";
  
      
      delBtn.onclick = () => {
        students.splice(i, 1);
        updateTable();
      };
  
      tdDelete.appendChild(delBtn);
  
      tr.appendChild(tdName);
      tr.appendChild(tdGrade);
      tr.appendChild(tdDelete);
      tbody.appendChild(tr);
    });
  }
  
