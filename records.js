window.addEventListener('load',() => {
    // const params = (new URL(document.location)).searchParams;
    // const fname = params.get(`fname`);
    // const mname = params.get(`mname`);
    // const lname = params.get(`lname`);
    const fname = localStorage.getItem(`FNAME`)
    const mname = localStorage.getItem(`MNAME`)
    const lname = localStorage.getItem(`LNAME`)
    const address = localStorage.getItem(`ADDRESS`);
    const birthday = localStorage.getItem(`BIRTHDAY`);
    const contactnumber = localStorage.getItem(`CONTACTNUMBER`);
    const gender = localStorage.getItem(`GENDER`);
    const mhistory = localStorage.getItem(`MHISTORY`)
    const symptoms = localStorage.getItem(`SYMPTOMS`)
    const txtmeds = localStorage.getItem(`TXTMEDS`)

    let fullname = `<h4>Name: ${fname} ${mname} ${lname}</h4>`
    let add = `Home Address is: ${address}`
    let bday = `Birthdate: ${birthday}`
    let cnumber = `Contact Number: ${contactnumber}`
    let gen = `Gender: ${gender}`
    let medhistory = `Medical History: ${mhistory}`
    let symp = `Current Symptoms: ${symptoms}`
    let meds = `Medication: ${txtmeds}`
    
    document.getElementById(`display1`).innerHTML = fullname
    document.getElementById(`display2`).innerHTML = add
    document.getElementById(`display3`).innerHTML = bday
    document.getElementById(`display4`).innerHTML = cnumber
    document.getElementById(`display5`).innerHTML = gen
    document.getElementById(`display6`).innerHTML = medhistory
    document.getElementById(`display7`).innerHTML = symp
    document.getElementById(`display8`).innerHTML = meds
    return;
})