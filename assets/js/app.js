// contact form validation
function validateForm() {
    var name =document.getElementById('name').value;
    var message=document.getElementById('message').value;
    var email=document.getElementById('email').value;
    var answer=document.getElementById('Answer');
    
    if (name =="" || message=="" || email=="") {
        answer.innerHTML="Fill All fields";
        return false;
    }
    
}
// to input only text in name
function validateName(event) {
    char=event.which;
    if(char >31 && char !=32 && (char <65 || char >90) && (char <97 || char >122)) {
        return false;
    }
}





// to input only numbers in phoneinput
// function a(event){
//  var Number = event.which;
//  if (Number >= 48  && Number <=57 ) {
//      return false;
//  }
// }

// reg form validation
function regFormValidate(){
var email=document.getElementById('regEmail').value;
var password=document.getElementById('regPassword').value;
var confirmPassword=document.getElementById('regConfirm').value;
var firstName=document.getElementById('regFirstname').value;
var lastName=document.getElementById('regSurname').value;
var phone=document.getElementById('regPhone').value;
var address=document.getElementById('regAddress').value;
var answer=document.getElementById('regAnswer');
var radio =document.getElementsByClassName('gender');


if (email =="" || email==null ) {
    answer.innerHTML="please fill the email";
    email.focus;
    return false;
}
if (password == ""   ) {
    answer.innerHTML="Fill Password";
    password.focus;
    return false;
}
if(password.length <=6){
    answer.innerHTML="password too short";
    password.focus;
    return false;
}
if (confirmPassword !== password || confirmPassword=="" || confirmPassword==null ) {
    answer.innerHTML="Comfirm Password";
    return false;
}
if (firstName == "" ) {
    answer.innerHTML="fill Firstname";
    firstName.focus;
    return false;
}
if (lastName == "" ) {
    answer.innerHTML="fill LastName";
    lastName.focus;
    return false;
}
if (phone == "" || isNaN(phone)) {
    answer.innerHTML="Confirm Phone Number";
    phone.focus;
    return false;
}
if (address == "" ) {
    answer.innerHTML="fill address";
    address.focus;
    return false;
}
if ((radio[0].checked == false) && (radio[1].checked == false) && (radio[2].checked == false)) {
    answer.innerHTML=" select a gender";
    return false;
} 

}