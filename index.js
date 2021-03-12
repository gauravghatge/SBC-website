function Check_Info(info){

    var regex_phone = /^\d{10}$/;
    var regex_email = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    var res=0;
    if(info.name.value==""){
        alert("Name cannot be Empty")
        return false;
    }
    if(info.email.value==""){
        alert("Email cannot be Empty")
        return false;
    }
    if(!regex_email.test(info.email.value)){
        alert("Enter valid Email")
        return false;
    }

    if(info.phone.value==""){
        alert("Phone Number cannot be Empty")
        return false;
    }
    
    if(!regex_phone.test(info.phone.value)){
        alert("Enter valid phone number")
        return false;
    }
   
  
   if(info.reason.value==""){
    alert("Enter valid Reason")
    return false;
   }
   
   alert("Thank You For Reaching Out To Us")
   return true;
  
  }