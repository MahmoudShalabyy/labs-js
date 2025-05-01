

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

let studentName = document.getElementById("studentName");
let studentGrade = document.getElementById("studentGrade");
let span = document.getElementById("span");
let table = document.getElementsByTagName("table")[0];
let form = document.getElementById("studentForm");
let filter = document.getElementById("filter");
let sort = document.getElementById("sort");
let students = [];

form.onsubmit = (e) => {
  e.preventDefault();

  let name = studentName.value.trim();
  let grade = studentGrade.value.trim();

  if (!name || isNaN(grade) || grade < 0 || grade > 100 || isRepeated(name)) {
    showError("Invalid input or repeated name");
    return;
  }

  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  students.push({ name, grade: Number(grade) });

  updateTable();

  studentName.value = "";
  studentGrade.value = "";
};

function isRepeated(name) {
  name = name.toLowerCase();
  return students.some((s) => s.name.toLowerCase() === name);
}

function showError(msg) {
  span.textContent = msg;
  span.style.display = "inline";
  setTimeout(() => {
    span.style.display = "none";
  }, 3000);
}

function updateTable() {
  let tbody = table.tBodies[0];
  tbody.innerHTML = "";

  let filtered = [...students];

  if (filter.value === "success") {
    filtered = filtered.filter((s) => s.grade >= 60);
  } else if (filter.value === "fail") {
    filtered = filtered.filter((s) => s.grade < 60);
  }

  if (sort.value === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort.value === "grade") {
    filtered.sort((a, b) => a.grade - b.grade);
  }

  filtered.forEach((s, i) => {
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerText = s.name;

    let tdGrade = document.createElement("td");
    tdGrade.innerText = s.grade;

    
    if (s.grade < 60) {
      tdName.style.backgroundColor = "red";
      tdGrade.style.backgroundColor = "red";
    } else if (s.grade >= 60 && s.grade < 75) {
      tdName.style.backgroundColor = "yellow";
      tdGrade.style.backgroundColor = "yellow";
    } else {
      tdName.style.backgroundColor = "green";
      tdGrade.style.backgroundColor = "green";
    }

    let tdDelete = document.createElement("td");
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";

    delBtn.onclick = () => {
      let originalIndex = students.findIndex(
        (student) => student.name === s.name && student.grade === s.grade
      );
      students.splice(originalIndex, 1);
      updateTable();
    };

    tdDelete.appendChild(delBtn);

    tr.appendChild(tdName);
    tr.appendChild(tdGrade);
    tr.appendChild(tdDelete);
    tbody.appendChild(tr);
  });
}

filter.onchange = updateTable;
sort.onchange = updateTable;

  
