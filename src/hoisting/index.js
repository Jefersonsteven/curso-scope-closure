console.log(nameOfDog); // undefined

var nameOfDog = 'Elmo';
console.log(nameOfDog); // Elmo

nameOfDogFunction();

function nameOfDogFunction() {
    return console.log(`her name is ${elmo}`);
}

var elmo = 'elmito';

nameOfDogFunction();