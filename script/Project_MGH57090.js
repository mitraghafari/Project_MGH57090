var PatientData = [];

function accumulateData(){

    let myform = document.myform;

    
 messegeDiv = document.getElementById("messegeDiv");
  if(validateAge() && validateName(form) && validateEmail(form) && validatephoneNumber(form)){
        // all inputs are valid
       
        messegeDiv.style.visibility="visible"
      
        const  patientObject = new Patient(); 
        patientObject.firstName = form.elements["firstName"].value;
        patientObject.lastName = form.elements["lastName"].value;
        patientObject.gender = form.elements["gender"].value;
        patientObject.age = form.elements["age"].value;
        patientObject.birthDate = form.elements["birthdate"].value;
        patientObject.email = form.elements["email"].value;
        patientObject.phone = form.elements["phone"].value;
        
       if(localStorage.getItem("patient3")==null){
            localStorage.setItem("patient3",JSON.stringify(PatientData))
        }
        var new_data=JSON.parse(localStorage.getItem("patient3"))
        new_data.push(patientObject)
        localStorage.setItem("patient3",JSON.stringify(new_data));

           
        messegeDiv.innerText  = "your information submitted successfully"

        console.log(patientObject);

    }else{
        // we will display the error message
       
        messegeDiv.style.visibility = "visible";
    }

}





function validateAge() {
    var age=document.getElementById('age').value;

// Convert user entered age to a number

age = parseInt(age, 10);

//check if age is a number or less than or greater than 100
if (isNaN(age) || age < 1 || age > 100)
{ 
    messegeDiv.innerText = "The age must be a number between 1 and 100";

  return false;
}
return true;
}
function validateName(form){
    
    var fname = form.elements["firstName"]; 
    var lastname= form.elements["lastName"]; 
    if(fname.validity.valueMissing){
        // no input at all
        fname.setCustomValidity("Please enter your name here");
        return false;
    }  if(lastname.validity.valueMissing){
        // no input at all
        lastname.setCustomValidity("Please enter your name here");
        return false;
    }       
    else{
        // there is some data
        fname.setCustomValidity("");
        lastname.setCustomValidity("");
        return true;
    }

} 
function validateEmail(form) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = form.elements["email"].value; 
    if(res.test(String(email).toLowerCase()))
    {
     return true;
    }
  else
    {
        messegeDiv.innerText = "Please enter a valid Email .";

    return false;
    }
 }


  function validatephoneNumber(form)
 {
    const res = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    var patientMobile = form.elements["phone"].value; 

    if(res.test(patientMobile))
     {
      return true;
     }
   else
     {
        messegeDiv.innerText = "Please enter a valid phone number.";

     return false;
     }
}    