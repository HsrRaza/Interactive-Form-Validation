document.querySelector(".formSubmit").addEventListener('click', (e)=>{
    e.preventDefault();
    
    const username =document.getElementById("username").value;
    const email =document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    const password=document.getElementById("password").value;
    const c_password=document.getElementById("confirmPassword").value;


    console.log(username);
    
})


