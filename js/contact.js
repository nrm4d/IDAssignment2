const form = document.getElementById('form')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const feedback = document.getElementById('feedback')
const errorElement = document.getElementById('error')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener('submit', (e) => {
    let messages = []
    if (firstname.value == "" || firstname.value.length <= 1) {
        messages.push('First name is required') 
    }

    if (lastname.value == "" || lastname.value.length <= 1) {
        messages.push('Last name is required')
    }

    if (email.value.match(mailformat)) {

    }
    else {
        messages.push('Invalid Email address')
    }

    if (phone.value == " " || phone.value.length < 8 || phone.value.length >= 9) {
        messages.push('Phone number must be 8 numbers')
    }

    if (feedback.value == " " || feedback.value.length <= 30) {
        messages.push('More feedback is needed :)')
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})
