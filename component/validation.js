export function validationForm(name,email,number){

    let valid = 0
    const validName = /^[A-z\s]{3,20}$/;
    const validEmail = /^[A-z0-9]{3,20}@[A-z]{3,20}\.[a-z]{2,3}$/
    const validNumber = /^\(\+\d{3}\)\s\d{3}-\d{3}-\d{3}$/

    if(!validName.test(name.value)){
        alert("name is not valid")
        valid = 1
    }
    if(!validEmail.test(email.value)){
        alert("Email is not valid")
        valid = 1
    }
    if(!validNumber.test(number.value)) {
        alert("Number is not valid")
        valid = 1
    }

    return valid

}