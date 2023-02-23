function makeUser(name, age) {
    return {
        name: name,
        age: age
    };
}

let user = makeUser("John", 30);
alert(user.name); // John

//

function makeUser(name, age) {
    return {
        name, // те ж саме що і  name: name
        age   // те ж саме що і   age: age
    };
}

// можуть бути властивості короткої форми запису і звичайні

let user = {
    name,
    age: 30
};
