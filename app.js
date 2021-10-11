// var message = "Hello Node!";

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// const message = 'Hello Node';
// message = 'Goodbye Node';

// const sum = 5 + 3;
// sum = 2;

// // console.log(message);
// // console.log(sum);

// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//     name: 'Lernantino',
//     age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';

// console.log(animalArray);
// console.log(personObj);

let message = 'Hello Node!';
message = 'Hello ES6!';

let sum = 5 + 3;
sum += 1;

console.log(message + "\n" + sum);


var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('======================');

    // Is the same as this...
    profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);