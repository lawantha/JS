const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2017 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];




//  forEach::::::::::::::::::::::::::::::::::::::

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }
console.log('foreEach------  ');

companies.forEach(function (company) { // "function (company)" is synchronous callback function 
    console.log(company.name);
});


//  filter:::::::::::::::::::::::::::::::::::::::::::

// to get 21 and older

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }


// const canDrink = ages.filter(function (age) {
//     if (age > 21) {
//         return true;
//     }
// });

const canDrink = ages.filter((age) => age >= 21);

console.log('filter1------  ' + canDrink);


//filter retail shops

// const retailCompany = companies.filter(function (company) {
//     if (company.category === 'Retail') {
//         return true;
//     };
// });


const retailCompany = companies.filter((company) => company.category === 'Retail'); //(company) is the parameter

const startsIn = companies.filter((company) => (company.start >= 1980 && company.start < 1990));

console.log('filter 2 only retail companies');
console.log(retailCompany);

console.log('filter 3 only companies in 80s');
console.log(startsIn);


//  map::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//create array of company names

const companyNames = companies.map(function (company) {
    return company.name;
});

// const companyData = companies.map(function (company) {
//     return `${company.name} started at ${company.start}`;
// });


const companyData = companies.map(company => (`${company.name} started at ${company.start}`))

console.log('map1 show only company names------  ');
console.log(companyNames);
console.log('map2------  ')
console.log(companyData);

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

const ageSquare = ages.map(age => roundToTwo(Math.sqrt(age)));
// const ageSqure = ages.map(age => (Math.sqrt(age)).toFixed(2));

const ageMap = ages
    .map(age => roundToTwo(Math.sqrt(age)))
    .map(age => age * 2);

console.log('map3 square root of ages------  ');
console.log(ageSquare);

console.log('map4 square root of ages round for 2 decimal points------  ')
console.log(ageMap);



//  sort::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// const sortedData = companies.sort(function (c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else return -1;
// });

const sortedData = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1)).map(function (company) {
    return company.start;
});

console.log('sort1------  ')
console.log(sortedData);

const sortAges = ages.sort();

console.log('sort2------  ')
console.log(sortAges);




//  reduce::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function (total, age) {
//     return total + age;
// }, 0); // 0 is value of second parameter(total)

const ageSum = ages.reduce((total, age) => (total + age), 0);

console.log('reduce------  ' + ageSum);


//get total years for all companies

// const totalYears = companies.reduce(function (total, company) {
//     return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log('reduce-------  ' + totalYears);


// all together ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 5);

console.log('combined-------    ' + combined);