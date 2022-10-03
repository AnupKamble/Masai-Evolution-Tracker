
 



 document.querySelector("form").addEventListener("submit", myfunction);

 function myfunction(event) {

    event.preventDefault();


   var name =  document.querySelector("#name").value;

   var batch =  document.querySelector("#batch1").value;

   var field =  document.querySelector("#field1").value;

   var unit =  document.querySelector("#unit1").value;

   var sprint=  document.querySelector("#sprint1").value;

   var marks =  document.querySelector("#marks").value;

   console.log(name,batch,field,unit,sprint,marks);

   

    const parent = document.createElement('div');


    const td1 = document.createElement('h3');
      td1.innerText = name;

    const td2 = document.createElement('p');
    td2.innerText = batch;

    const td3 = document.createElement('p');
    td3.innerText = field;

    const td4 = document.createElement('p');
    td4.innerText = unit;

    const td5 = document.createElement('p');
    td5.innerText = sprint;

    const td6 = document.createElement('p');
    td6.innerText = marks;

    const td7 = document.createElement('h4');

    if ( marks <= 3 ) {
        
        td7.innerText = "Learning";
        td7.style.color="red";
    }
    else if (marks >= 4 && marks <= 7 ) {
        
        td7.innerText = "Achieving";
        td7.style.color = "orange";
    }
    else {
        td7.innerText = "Mastery";
        td7.style.color = "green";
    }


    var btn = document.createElement('button');
    btn.innerText = "Delete";
    btn.style.backgroundColor="red";
    btn.style.cursor='pointer';

    btn.addEventListener("click",function(event){
        event.target.parentNode.remove()
    })
  
        


    parent.append(td1,td2,td3,td4,td5,td6,td7,btn);
    
    document.querySelector("#reports").append(parent);

 }