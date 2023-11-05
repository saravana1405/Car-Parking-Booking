function login(){
    let user=document.getElementById('user').value;
  let password=document.getElementById('password').value;
  if(user==="" || user===null){
    let usererror=document.getElementById('usererror');
    usererror.innerHTML="**Enter the username..";
    let user=document.getElementById('user');
    user.style.borderBottom='2px solid rgb(243, 45, 45)';
    usererror.style.fontWeight='bold';
    return false;
  }
   else{
   let user=document.getElementById('user');
   user.style.borderBottom='2px solid rgb(23,214,79)';
   let tick=document.getElementById('tick');
   tick.innerHTML="✔";
   let usererror=document.getElementById('usererror');
   usererror.innerHTML=null;
  }
  if(password==="" || password===null){
    let passerror=document.getElementById('passerror');
    passerror.innerHTML="**Enter the password..";
    let passwordbox=document.getElementById('password');
    passwordbox.style.borderBottom='2px solid rgb(247, 45, 45)';
    passerror.style.fontWeight='bold';
    return false;
  }
   else{
    let password=document.getElementById('password');
    password.style.borderBottom='2px solid rgb(10,250,130)';
    let passtick=document.getElementById('passtick');
   passtick.innerHTML="✔";
    let passworderror=document.getElementById('passerror');
    passworderror.innerHTML=null;
  }
  
}