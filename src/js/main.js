import '../css/style.css';
import '../css/style.scss';

let isBlur = false;
let checkPassword = document.querySelector('.password-validator-block__check-password')
let input = document.querySelector('.password-validator-block__input')
let regExpNumbers = /[\d]/
let regExpLC = /[a-z]/
let regExpUC = /[A-Z]/

let ol = document.createElement('ol')
ol.classList.add('password-validator-block__ol')

function createLi(text) {

    let li = document.createElement('li')
    li.classList.add('password-validator-block__li')
    li.innerHTML = text
    ol.append(li)
    return document.querySelector('.main__password-validator-block').append(ol)
}

input.oninput = function () {
    if (input.value.length > 0) {
        checkPassword.disabled = false
    }
    else {
        document.querySelectorAll('span').forEach(item => {
            item.style.opacity = 0
        })
        document.querySelectorAll('.password-validator-block__li').forEach(item => {
            item.style.opacity = 0;
            setTimeout(() => {
                item.style.display = 'none'
            }, 1000);
        })
        checkPassword.disabled = true
        isBlur = false
        document.querySelector('main').style.filter = 'blur(0)'
    }
}

checkPassword.addEventListener('click', () => {
    if (!isBlur) {
        document.querySelector('main').style.filter = 'blur(10px)'
        if (input.value.length >= 16) {
            document.querySelector('#length').style.opacity = 1
        }
        if (input.value.length < 16) {
            document.querySelector('#length').style.opacity = 1
            document.querySelector('#length').innerHTML = '✖'
            document.querySelector('#length').style.color = 'red'
            createLi(`Пароль должен быть не меньше 16 символов. Ваш пароль длиной в ${input.value.length}`)
        }
        if (input.value.match(regExpNumbers) != null) {
            document.querySelector('#HN').style.opacity = 1
        }
        else {
            document.querySelector('#HN').style.opacity = 1
            document.querySelector('#HN').innerHTML = '✖'
            document.querySelector('#HN').style.color = 'red'
            createLi(`В пароле должна содержаться хотя бы одна цифра. В вашем пароле цифр нету`)
        }
        if (input.value.match(regExpLC) != null) {
            document.querySelector('#LC').style.opacity = 1
        }
        else {
            document.querySelector('#LC').style.opacity = 1
            document.querySelector('#LC').innerHTML = '✖'
            document.querySelector('#LC').style.color = 'red'
            createLi(`В пароле должна содержаться хотя бы одна прописная буква. В вашем пароле прописных букв нету`)

        }
        if (input.value.match(regExpUC) != null) {
            document.querySelector('#UC').style.opacity = 1
        }
        else {
            document.querySelector('#UC').style.opacity = 1
            document.querySelector('#UC').innerHTML = '✖'
            document.querySelector('#UC').style.color = 'red'
            createLi(`В пароле должна содержаться хотя бы одна заглавная буква. В вашем пароле заглавных букв нету`)
        }

        if (input.value.length >= 16 && input.value.match(regExpNumbers) != null && input.value.match(regExpLC) != null && input.value.match(regExpUC) != null) {
            createLi(`В вашем пароле все хорошо)`)
        }

        isBlur = true
        
    } else {
        document.querySelector('main').style.filter = 'blur(0)'
        isBlur = false
    }
})

