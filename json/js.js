function display(data) {
    const vehicle = `<h1>${data.brand} ${data.model} ${data.year}</h1>
    <img src="${data.img}" class="img-fluid" alt="Responsive image">
    <table>
        <tr>

            <th>price:</th>
            <td>${data.price}</td>
        </tr>
        <tr>
            <th>brand:</th>
            <td>${data.brand}</td>
        </tr>
        <tr>
            <th>model:</th>
            <td>${data.model}</td>
        </tr>
        <tr>
            <th>year:</th>
            <td>${data.year}</td>
        </tr>
        <tr>
            <th>engine</th>
        </tr>
        <tr>
            <td>capacity:</td>
            <td>${data.engine.capacity}</td>
        </tr>
        <tr>
            <td>type:</td>
            <td>${data.engine.type}</td>
        </tr>
        <tr>
            <th>feature</th>
            <td>${data.feature[0]}<br>${data.feature[1]}<br>${data.feature[2]}</td>
        </tr>
        <tr>
            <th>color:</th>
            <td>${data.color}</td>
        </tr>
    </table>`;
    document.querySelector('.container').innerHTML = vehicle;
}

// :::::::::without promise::::::::

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText);
//         console.log(JSON.parse(xhr.responseText));
//         display(JSON.parse(xhr.responseText));
//     }
// }

// xhr.open('get', 'data.json');
// xhr.send();


// ::::::::with promise:::::::

async function getFile() {
    let myPromise = new Promise(function (resolve) {
        let req = new XMLHttpRequest();
        req.open('get', 'data.json');
        req.onload = function () {
            if (req.readyState === 4 && req.status === 200) {
                // console.log(req.responseText);
                // console.log(JSON.parse(req.responseText));
                // console.log(req.response);
                resolve(JSON.parse(req.responseText));
            } else {
                resolve("file not found");
            }
        };
        req.send();
    });
    display(await myPromise);
}

getFile();



// ::::::::::::::::::::::::::::::::send data to server:::::::::::::::::::::::

const todos = [
    {
        id: 1,
        txt: "fdsfasf",
        isComplete: true
    },
    {
        id: 2,
        txt: "afsaf",
        isComplete: false
    },
    {
        id: 3,
        txt: "ggdsfgs",
        isComplete: true
    },
    {
        id: 4,
        txt: "fdgdfsdf",
        isComplete: true
    },
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

for (let i = 0; i < todos, length; i++) {
    console.log(todos[i].txt);
}

// or

for (let t of todos) {
    console.log(t.txt);
}

// foreach, map, filter 

todos.forEach(function (todo) {
    console.log(todo.txt);
});

//arrow way
todos.forEach((todo) => console.log(todo.txt));

const todoText = todos.map(function (todo) {
    return todo.txt; //output as a array
});
console.log(todoText);

// const todoCompleted = todos.filter(function (todo) {
//     return todo.isComplete === true;
// });
const todoCompleted = todos.filter(function (todo) {
    return todo.isComplete === true;
}).map(function (todo) {
    return todo.txt;
});
console.log(todoCompleted);