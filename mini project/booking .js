let hour=document.getElementById('hour');
let btn=document.getElementById('btn');
let amt=document.getElementById('amt');
btn.addEventListener('click',()=>{
    let val=hour.value;
   amt.innerHTML="R.s "+val*30;

    
})