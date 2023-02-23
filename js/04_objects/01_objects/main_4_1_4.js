// Якщо звернутись до ключа, якого немає, то повернеться undefined

let user = {};
console.log(user.noSuchProperty); // undefined

// Перевірки на наявність ключа

// 1
alert( user.noSuchProperty === undefined ); // true

// 2
// Оператор in
// "key" in object


let user = { name: "John", age: 30 };

alert( "age" in user ); // true
alert( "blabla" in user ); // false

let key = "age";
console.log(key in user); // false використовуємо значення змінної key

// === undefined чи in

let obj = {
    test: undefined
};

alert( obj.test ); // undefined
alert( "test" in obj ); // true
