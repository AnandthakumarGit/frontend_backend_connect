 var id;
  var uname;
   var subject;
    var address ;
function fetchdata(){
        let print=document.getElementById("print");
        print.innerHTML=`   <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>SUBJECT</th>
                <th>ADDRESS</th>
            </tr>`;
    fetch("http://localhost:8080/")
    .then(response => response.json())
    .then(data => data.forEach(element => {

        
        
        id=element.id;
       uname=element.name;
      subject= element.subject;
      address=  element.address;
  
     
      print.innerHTML+=` <tr> <td>${element.id}</td> <td>${element.name} </td>  <td>${element.subject} </td> <td>${element.address} </td> </tr> `;    })
)

.catch(error_e => console.error(error_e));





}