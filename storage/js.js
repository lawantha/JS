
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::localStorage

localStorage.setItem('name', 'bob');
localStorage.setItem('age', 21);
console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('age'));


// :::::::::::::::::::::::::::::::::::::::::::::::::::::sessionStorage

sessionStorage.setItem('city', 'Tokyo');

console.log(sessionStorage.getItem('city'));


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::cookies

document.cookie = 'country=japan; expires=' + new Date(2025, 0, 23).toUTCString();
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/";

console.log(new Date(2025, 0, 23).toUTCString());

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    console.log(d);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

setCookie('data', 'hello', 50);

function getCookie(cname) {
    let name = cname + "=";
    console.log(name);
    let decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie);

    let ca = decodedCookie.split(';');
    console.log(ca);

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        console.log(c);
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
            console.log(c);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "no data found";
}

console.log(getCookie('data'));