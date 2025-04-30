
let myWindow = open("https://www.facebook.com", "_blank", "width=300,height=300");

myWindow.scrollTo(0, myWindow.document.body.scrollHeight);


setTimeout(() => {
    if (myWindow) {
        myWindow.close();
      }
},2000);


myWindow.document.write("My name is Mahmoud");

//*********************************************************************************** */

let images = document.images;
let images2 = document.getElementsByTagName("img"); 

// b- 
let options = document.getElementById("city").options;

// c- 
let table2 = document.getElementsByTagName("table")[1].getElementsByTagName("td");

// d- 
let elements = document.querySelectorAll(".fontBlue.BGrey");


//********************************************************************************

setInterval(() => {
    let now = new Date(); 
    document.title = now.toLocaleString(); 
  }, 1000); 



 
  let str = location.search; 
  let search = str.substring(1); 
  let arr = search.split("&"); 
  let obj = {};

  arr.forEach((elem) => {
    let keyValue = elem.split("="); 
    obj[keyValue[0]] = keyValue[1];
  });

    console.log(obj);
  

  