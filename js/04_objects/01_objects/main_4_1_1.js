// Object зберігає пари (key;value)
// key або властивість обʼєкта

let user = new Object(); // constructor
let user = {}; // літерал

let user = {
    name: "John",
    age: 30
};

// прочитати властивысть обʼєкта
console.log(user.name);
console.log(user.age);

// додати властивысть
// тип властивості може буди будь який
user.isAdmin = true;

// видалення
delete user.isAdmin;

let user = {
    name: "John",
    age: 30,
    "likes birds": true  // властивість з кількох слів має бути в кавичках
};

// Остання властивість може закінчуватись комою
// Це для зручнішого копіпасту

let user = {
    name: "John",
    age: 30,
}

// Обʼєкт константа може бути змінений
// const захищає від зміни саму змінну, а не її нутрощі

const user2 = {
    name: "John"
};

user2.name = "Pete";

console.log(user2.name); // Pete

let user = {};

// user.likes birds = true // ERROR

// записати
user["likes birds"] = true;
// прочитати
console.log(user["likes birds"]); // true
// видалити
delete user["likes birds"];


// Імʼя властивості може бути виразом

let key = "likes birds";
user[key] = true;
// user.key = true // ERROR

// Властивість яку треба обчислити

let fruit = "apple";

let bag = {
    [fruit]: 5, // ця властивість буде взята з змінної fruit
};

alert( bag.apple ); // 5

let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

