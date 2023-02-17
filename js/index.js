var newUserName = document.getElementById("newUserName") ;
var newUserEmail =document.getElementById("newUserEmail");
var newUserPass= document.getElementById("newUserPass") ;
var signEmailInput = document.getElementById("signEmail");
var signPassInput = document.getElementById("signPass");


var allUsersContainer = [];

function getEmail() 
{

  if(localStorage.getItem(allUsersContainer) != null)
  {
    allusers=JSON.parse(localStorage.getItem(allUsersContainer))  ;
    for (var i = 0; i < allUsersContainer.length; i++) {
      if (allUsersContainer[i].signEmailInput.toLowerCase() == newUserEmail.value.toLowerCase()) {
          
      }
  }
  if(i >= allUsersContainer.length)
  {
    addNewUser ();
  }
  }
  else{
    errorOrSuccess()
  }

}

function addNewUser ()
{
var user = {
name:newUserName.value,
email:newUserEmail.value,
pass:newUserPass.value 
}


  allUsersContainer.push(user);
  localStorage.setItem("all users",JSON.stringify(allUsersContainer));
  clearFormNew();
   
  
}

function errorOrSuccess()
{
alert('you can not');
}

function clearFormNew()
{
  newUserName.value="";
  newUserEmail.value="";
  newUserPass.value=""
}





// Index.html


function addUser() {
    if (validatUser() == true) {
        var users = {
            signEmail : signEmailInput.value,
            signPass : signPassInput.value,
        }
        allUsersContainer.push(users);
    localStorage.setItem("Users" , JSON.stringify(allUsersContainer));
    clearForm();
    }
    else{
        alert('Email is required')
    }
    
    
}
function validatUser() {
    var regex = /^([A-Za-z0-9]+@[A-Za-z]{1,5}\.[A-Za-z]{2,3})$/;
    return regex.test(signEmail.value);
 

}
function clearForm() {
    signEmailInput.value = "";
    signPassInput.value ="";
}
