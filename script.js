document.querySelector(".formSubmit").addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const c_password = document.getElementById("confirmPassword").value;


    // console.log(username);

    // regualar Expression 
    const usernameRegx = /^[A-za-z0 ]{3,20}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/
    const emailRegex = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[6-9][\d]{9}$/;

    //    clear Previous Errors

    document.querySelectorAll('.error').forEach((curElem) => (curElem.textContent = ""))


    let isValid = true;


    // validate Username
    if (!usernameRegx.test(username)) {
        document.getElementById("usernameError").textContent = "username is not valid"
        isValid=false;
    }


    // validate Password
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be Atleast 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character "
        isValid=false;
    }

      // validate email
    if (!emailRegex.test(email)) {
        document.getElementById("mailError").textContent = "Please enter a valid email address "
        isValid=false;

    }
      // validate email
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be 10 digits long and start with 6,7,8 or 9."
        isValid=false;
    }

    // validate confirm password

    if(c_password !==password){
        document.getElementById("confirmPasswordError").textContent = "Password is not matching"
        isValid=false;
    }

    let userData=[];



    if(isValid){
       let formClass =  document.getElementsByClassName("form-control")
       Array.from(formClass).forEach( (curElem) => userData.push(curElem.value))
       Array.from(formClass).forEach((curElem) => (curElem.value = ""))

  console.log(userData);
  
       alert("Registration Successfull")
       

    }

    

});


