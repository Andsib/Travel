const patterns = {
    name: new RegExp(/^[a-zA-Z ]+$/),
    email: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    phone: new RegExp(/^\d[\d\(\)\ -]{4,14}\d$/),
}

function submit() {
    let userName = document.querySelector(".name");
    let userEmail = document.querySelector(".email");
    let userPhone = document.querySelector(".phone");
    let userCountry = document.querySelector(".country");
    let checkbox = document.querySelector(".checkbox");
    let submitButton = document.querySelector('.submit');
    console.log(checkbox);

    submitButton.addEventListener('click', function (event) {
        let submitAllow = true;
        if (!checkData(patterns.name, userName, `Example: Mary Sole`) ||
            !checkData(patterns.email, userEmail, 'Example: blok90@gmail.com') ||
            !checkData(patterns.phone, userPhone, 'Example: 8 (999) 1234567') ||
            !checkCountry(userCountry) || !checkCheckbox(checkbox)) {
            if (submitAllow) {
                event.preventDefault();
            }
        } else {
            submitAllow = false;
        }
    });
}

function checkData(validation, item, text) {
    let result = validation.test(item.value);
    if (item.value === '' || !result) {
        item.style.backgroundColor = 'red';
        item.title = text;
        return false;
    } else {
        item.style.backgroundColor = 'white';
        return true;
    }
}
// !checkbox.classList.contains('checkbox:checked'))


function checkCountry(country) {
    if (country.value === 'Choose your country') {
        country.style.backgroundColor = 'red';
        setTimeout(() => country.style.backgroundColor = 'white', 3000);
        return false;
    } else {
        return true;
    }
}

function checkCheckbox(box) {
    let falseCheckbox = document.querySelector('.false_checkbox');
    let checkboxText = document.querySelector('.checkbox_text')

    falseCheckbox.addEventListener('click', function () {
        box.checked = true;
    })
    if (box.checked != true) {
        alert('Confirm terms & conditions');
        return false;
    } else {
        return true;
    }
}

submit();