let username = document.querySelector(`#username`);
let password = document.querySelector('#password');
let adminuser= "admin";
let adminpass = "admin";

    validate = () => {
    if(username.value==''){
        alert(`Please Enter Your Username!`);
    
    }
    else if(username.value != adminuser){
        alert(`Username does not exist`);
        
    }

    else if(password.value == ''){
        alert(`Please Enter Your Password!`);
        
    }
    else if(password.value != adminpass){
        alert(`Incorrect Password!`);
        
    }else {
        window.location.href = 'index.html'
    };
    }

    btn.addEventListener('click', e => {
        e.preventDefault();
        validate();
    });

