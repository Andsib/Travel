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

function checkCountry(country) {
    if (country.value === 'Choose your country') {
        country.style.backgroundColor = 'black';
        country.style.color = 'red';
        return false;
    } else {
        country.style.backgroundColor = 'white';
        country.style.color = 'black';
        return true;
    }
}

function checkCheckbox(box) {
    let falseCheckbox = document.querySelector('.false_checkbox');

    falseCheckbox.addEventListener('click', function () {
        box.checked = true;
    })
    if (box.checked != true) {
<<<<<<< HEAD
        createModuleWindow();
=======
        alert('Please, confirm terms & conditions');
>>>>>>> 9c48ecdfb3c2681f897877bca11ceace8f30aeb8
        return false;
    } else {
        return true;
    }
}

<<<<<<< HEAD
function createModuleWindow() {
    let shader = document.createElement('div');
    shader.classList.add('shader');
    document.body.append(shader);

    let module = document.createElement('div');
    module.classList.add('module');
    shader.append(module);

    let moduleText = document.createElement('p');
    moduleText.classList.add('module_text');
    moduleText.innerHTML = 'Please, confirm terms and conditions';
    module.append(moduleText);

    let moduleButton = document.createElement('button');
    moduleButton.classList.add('module_button');
    moduleButton.innerHTML = 'OK';
    module.append(moduleButton);

    moduleButton.addEventListener('click', ()=> {
        shader.style.display = 'none';
    })
}

submit();
=======
submit();
>>>>>>> 9c48ecdfb3c2681f897877bca11ceace8f30aeb8
