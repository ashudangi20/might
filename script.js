function formvalidation(){
    if(verifyName()){
        if(verifyEmail())
        {
          if(verifyPassword()){
           
          }
                    
        }
    }
}
function verifyName() {
    let nw = document.getElementById("n1").value;
    if(nw == "") {
       document.getElementById("message1").innerHTML = "**Enter name please!";
       return false;
    }
    if(nw.length < 2) {
       document.getElementById("message1").innerHTML = " name should be greater than 2 characters";
       return false;
    }
     else {    
       return true
    }
  }

  function verifyEmail()
{
    let ew = document.getElementById("e1").value;
    let ews = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(e1.value.match(ews))
{ 
    return true
}else{
        document.getElementById("message2").innerHTML = " Email should contain 1 uppercase 1 lowercase 1specail character and 1 number";
    
return false;
}
}


function verifyPassword() {
  var pw = document.getElementById("pswd").value;

  if(pw == "") {
     document.getElementById("message3").innerHTML = "**Fill the password please!";
     return false;
  }

  if(pw.length < 8) {
     document.getElementById("message3").innerHTML = "**Password length must be atleast 8 characters";
     return false;
  }


  if(pw.length > 15) {
     document.getElementById("message3").innerHTML = "**Password length must not exceed 15 characters";
     return false;
  } else {
     alert("Password is correct");
     return true
  }
}

