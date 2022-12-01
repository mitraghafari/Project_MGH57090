window.addEventListener ('load', () => { 
    initializeSelect();

});


function initializeSelect(){
    var hst = document.getElementById("patientInfo");

    var retrievedInfo = JSON.parse(localStorage.getItem("patient3"));

if(retrievedInfo!=null && retrievedInfo.length>0 ){
for (var i = 0; i < retrievedInfo.length; i++) {
    hst.innerHTML += "<tr><td>" + retrievedInfo[i].firstName + "</td>"+
    "<td>" + retrievedInfo[i].lastName + "</td>"+
    "<td>" + retrievedInfo[i].age + "</td>"+
    "<td>" + retrievedInfo[i].birthDate + "</td>"+
    "<td>" + retrievedInfo[i].phone + "</td>"+
    "<td>" + retrievedInfo[i].email + "</td>"+
    "<td>" + retrievedInfo[i].gender + "</td></tr>"
}
}
}    