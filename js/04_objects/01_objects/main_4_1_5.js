// for (key in object) {
//
// }


let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // ключи
    alert( key );  // name, age, isAdmin
    alert( user[key] ); // John, 30, true
}


let codes = {
    "49": "Germany",
    "41": "Swiss",
    "44": "UK",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}


// Цілочивесльні ключі розташовуються в порядку зростання
// інші ключі в порядку створення

// Цілочивесльні ключі - ключі, які можуть бути перетворені в ціле число і назад в рябок без змін
// YES "49"
// NO  "+49"
// NO  "1.2"

// Math.trunc - відкидає дробову частину
// alert( String(Math.trunc(Number("49"))) );
// alert( String(Math.trunc(Number("+49"))) );
// alert( String(Math.trunc(Number("1.2"))) );


let user = {
    name: "John",
    surname: "Smith"
};
user.age = 25;

// не цілочивесльні ключі перебирається в порядку створення
for (let prop in user) {
    alert( prop ); // name, surname, age
}

let user = {
    name: "John",
    surname: "Smith",
    "49": "Germany",
    "41": "Swiss",
    "44": "UK",
    "1": "USA"
};

for (let prop in user) {
    alert( prop ); // 1, 41, 44, 49, name, surname
}
