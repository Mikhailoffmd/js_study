// На імʼя властивостей обмежень немає

let obj = {
    for: 1,
    let: 2,
    return: 3
};

alert( obj.for + obj.let + obj.return );  // 6

// Число в якості ключа перетворюється на рядок


let obj = {
    0: "Test" // те ж саме що і "0": "Тест"
};

alert( obj["0"] ); // Test
alert( obj[0] );   // Test

// В ключ __proto__ можно покласти тільки обʼєкти
let obj = {};
obj.__proto__ = 5; // присвоємо число
console.log(obj.__proto__); // [object Object]
