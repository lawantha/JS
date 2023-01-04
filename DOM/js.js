// console.log(window);

//Single element
const form = document.getElementById('my-form');

console.log(document.querySelector('.container'))

//multiple elements
console.log(document.querySelectorAll('.item'));

console.log(document.getElementsByClassName('item'));

// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// EVENTS

// Mouse Event
// btn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(e);

//     document.querySelector('#my-form').style.background = '#ccc'

//     document.querySelector('body').classList.add('bg-dark');
// });


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function validateEmail(email) {
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return re.test(email);
}

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'pls enter values';
        msg.classList.add('error')

        setTimeout(() => msg.remove(), 2000);
    }
    else {
        msg.remove();

        if (validateEmail(email)) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

            userList.appendChild(li);

            //clear field
            nameInput.value = '';
            emailInput.value = '';
        } else {
            msg.innerHTML = 'Email is invalid';
            msg.classList.add('error');

            setTimeout(() => msg.remove(), 2000);
        }


    }
}

















// let star = document.getElementById('star')
// let moon = document.getElementById('moon')
// let text = document.getElementById('text')
// let forest = document.getElementById('forest')
// let navbar = document.querySelector('nav')
// let button = document.getElementById('back-to-top')
// // let sidebtn = document.getElementById()

// window.addEventListener('scroll', function () {
// 	let value = window.scrollY;
// 	star.style.left = value * 0.25 + 'px';
// 	moon.style.top = value * 1.25 + 'px';
// 	text.style.marginRight = value * 4 + 'px';
// 	navbar.style.top = value * -0.5 + 'px';

// 	if (value > 200) {
// 		button.style.opacity = 1;
// 		button.style.visibility = 'visible'
// 	} else {
// 		button.style.opacity = 0;
// 		button.style.visibility = 'hidden'
// 	}

// })
// window.addEventListener('scroll', function () {
// 	let value = window.scrollY;

// 	if (value > 200) {
// 		button.style.opacity = 1;
// 		button.style.visibility = 'visible'
// 	} else {
// 		button.style.opacity = 0;
// 		button.style.visibility = 'hidden'
// 	}

// })
// function back() {
// 	console.log('--------------button clicked')
// 	var body = $("html, body");
// 	body.animate({ scrollTop: 0 }, 500, 'swing')
// }

// function togglemenu() {
// 	const togglemenu = document.querySelector('.togglemenu');
// 	const navigation = document.querySelector('.navigation');
// 	// togglemenu.classList.toggle('active');
// 	navigation.classList.toggle('active');
// }

// //footer
// $(document).ready(function () {
// 	$("#footer-placeholder").load("footer.html");
// });

// //navbar
// $(document).ready(function () {
// 	$("#navbar-placeholder").load("navbar.html");
// });

// //navbar2
// $(document).ready(function () {
// 	$("#navbar2-placeholder").load("navbar2.html");
// });