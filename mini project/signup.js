function sign(){
    let user=document.getElementById('user').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let confirm=document.getElementById('confirm').value;
      if(user==="" || user===null){
       let usererror=document.getElementById('usererror');
       usererror.innerHTML="**Enter the username..";
       let user=document.getElementById('user');
       user.style.borderBottom='2px solid rgb(247, 45, 45)';
       usererror.style.fontWeight='bold';
       return false;
     }
      else{
      let user=document.getElementById('user');
      user.style.borderBottom='2px solid rgb(10,250,130)';
      let usererror=document.getElementById('usererror');
      usererror.innerHTML=null;
     }
     
      if(email==="" || email===null){
      let emailerror=document.getElementById('emailerror');
      emailerror.innerHTML="**Enter the email..";
      let email=document.getElementById('email');
      email.style.borderBottom='2px solid rgb(247, 45, 45)';
      emailerror.style.fontWeight='bold';
      return false;
    }
    else{
      let email=document.getElementById('email');
      email.style.borderBottom='2px solid rgb(10,250,130)';
      let emailerror=document.getElementById('emailerror');
      emailerror.innerHTML=null;
    }
     if(password==="" || password===null){
      let passworderror=document.getElementById('passerror');
      passworderror.innerHTML="**Enter the password..";
      let password=document.getElementById('password');
      password.style.borderBottom='2px solid rgb(247, 45, 45)';
      passworderror.style.fontWeight='bold';
      return false;
    }
     else{
      let password=document.getElementById('password');
      password.style.borderBottom='2px solid rgb(10,250,133)';
      let passworderror=document.getElementById('passerror');
      passworderror.innerHTML=null;
    }
     if(confirm==="" || confirm===null){
      let confirmerror=document.getElementById('confirmerror');
      confirmerror.innerHTML="**Enter the confirm password..";
      let confirm=document.getElementById('confirm');
      confirm.style.borderBottom='2px solid rgb(247, 45, 45)';
      confirmerror.style.fontWeight='bold';
      return false;
     }
     else if(password !== confirm){
      let confirmerror=document.getElementById('confirmerror');
      confirmerror.innerHTML="**Password does not match..";
      let confirm=document.getElementById('confirm');
      confirm.style.borderBottom='2px solid rgb(247, 45, 45)';
      return false;
    }
      else{
      let confirm=document.getElementById('confirm');
      confirm.style.borderBottom='2px solid rgb(10,250,130)';
      let confirmerror=document.getElementById('confirmerror');
      confirmerror.innerHTML=null;
      alert("Records added sucessfully ✔ ")
    }
       return true;
  
   
  }
  
  
  