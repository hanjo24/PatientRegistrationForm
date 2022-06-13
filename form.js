    const fname = document.querySelector(`#fname`)
    const lname = document.querySelector(`#lname`)
    const address = document.querySelector(`#address`)
    const birthday = document.querySelector(`#birthday`)
    const contactnumber = document.querySelector(`#contactnumber`)


    
    form.addEventListener('submit', function (e) {
      // prevent the form from submitting
      if((checkfname() == ``) || (checklname() == ``) || (checkaddress() == ``) || (checkbirthday() == `` ) || (checkcontactnumber() == ``)){
        e.preventDefault();}

    const mname = document.getElementById(`mname`).value
    const gender = [...document.getElementsByName(`gender`)].find(input => input.checked).value;
    const medicalhistory = document.querySelectorAll('input[name=medicalhistory]:checked')
        let mhistory = [];
        medicalhistory.forEach((history)=>{
            mhistory.push(history.value);
            });
            let symptoms = [];
            for (var option of document.getElementById('symptoms').options)
            {
            if (option.selected) {
            symptoms.push(option.value);
            }};
    const chkYes = document.getElementById("chkYes");
    const txtmeds = document.getElementById("txtmeds").value


        
    let fname1 = checkfname();
    let lname1 = checklname();
    let address1 = checkaddress();
    let birthday1 = checkbirthday();
    let contactnumber1 = checkcontactnumber();
        localStorage.setItem(`FNAME`, JSON.stringify(fname1));
        localStorage.setItem(`LNAME`, JSON.stringify(lname1));
        localStorage.setItem(`MNAME`, JSON.stringify(mname));
        localStorage.setItem(`ADDRESS`, JSON.stringify(address1));
        localStorage.setItem(`BIRTHDAY`, JSON.stringify(birthday1));
        localStorage.setItem(`CONTACTNUMBER`, JSON.stringify(contactnumber1));
        localStorage.setItem(`GENDER`, JSON.stringify(gender));
        localStorage.setItem('MHISTORY', JSON.stringify(mhistory));
        localStorage.setItem('SYMPTOMS', JSON.stringify(symptoms));
        localStorage.setItem('TXTMEDS', JSON.stringify(txtmeds));    
        
    });

    const isRequired = value => value === '' ? false : true;

    const checkfname = () => {
        let valid = false;
        const fname1 = fname.value;
        if (!isRequired(fname1)) {
        alert(`First Name cannot be blank.`)
        fname.style.backgroundColor = "red";
        } else {
          valid = true;
        }
        return fname1;
    }
    const checklname = () => {
        let valid = false;
        const lname1 = lname.value;
        if (!isRequired(lname1)) {
        alert(`Last Name cannot be blank.`);
        lname.style.backgroundColor = "red";
        } else {
            valid = true;
        }
        return lname1;
        }
    const checkaddress = () => {
        let valid = false;
        const address1 = address.value;
    
        if (!isRequired(address1)) {
            alert(`Address cannot be blank.`);
            address.style.backgroundColor = "red";
        } else {
            valid = true;
        }
        return address1;
        }
    const checkbirthday = () => {
        let valid = false;
        const birthday1 = birthday.value;
    
        if (!isRequired(birthday1)) {
            alert(`Birthday cannot be blank.`);
            birthday.style.backgroundColor = "red";
        } else {
            valid = true;
        }
        return birthday1;
        }
    const checkcontactnumber = () => {
        let valid = false;
        const contactnumber1 = contactnumber.value;
        if (!isRequired(contactnumber1)) {
            alert(`Contact Number cannot be blank.`);
            contactnumber.style.backgroundColor = "red";
        } else {
            valid = true;
        }
        return contactnumber1;
        }

        //disable inputbox when radio is checked
    function EnableDisableTextBox() {
        txtmeds.disabled = chkYes.checked ? false : true;
        if (!txtmeds.disabled) {
            txtmeds.focus();
        }
        }
