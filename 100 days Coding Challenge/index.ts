// TAHA KHAN
// 26/2/24


// Q2
const personName: string = "Ashar";
// console.log("Hello " + personName + " would you like to learn some Python today?");

// Q3
// console.log(personName.toUpperCase());
// console.log(personName.toLowerCase());

// Q4
// console.log("Imran Khan once said, " +'"Never give up, no matter how hard life gets no matter how much pain you feel. Pain will eventually subside, nothing remains forever, so keep going and dont give up."')

// Q5
const famous_person: string = "Imran Khan";
// const mesg: string =famous_person+ " once said, " +'"Never give up, no matter how hard life gets no matter how much pain you feel. Pain will eventually subside, nothing remains forever, so keep going and dont give up."';
// console.log(mesg);

// Q6
// Store a person's name with whitespace characters
// let personNamee: string = "\t\n   John Doe   \t\n";

// Print the name with whitespace displayed
// console.log("Name with whitespace:");
// console.log("'" + personNamee + "'");

// Strip whitespace from the name
// let strippedName: string = personNamee.trim();

// Print the name after stripping whitespace
// console.log("\nName after stripping whitespace:");
// console.log("'" + strippedName + "'");


 
// Q7/8
// console.log("Addition:", 5 + 3);

// console.log("Subtraction:", 10 - 2);

// console.log("Multiplication:", 4 * 2);

// console.log("Division:", 16 / 2);


// Q9
// Store your favorite number in a variable
// let favNum: Number = 10;

// Create a message revealing your favorite number
// let msg:string = `My fav number is ${favNum}`; 

// Print the message
// console.log(msg);


// Q11
// const arr_frnds: string[] = ["Ashar", "Ahmed", "Shayan"]
// console.log(arr_frnds[0]);
// console.log(arr_frnds[1]);
// console.log(arr_frnds[2]);


// Q12
// console.log("Welcome " +arr_frnds[0]);
// console.log("Welcome " +arr_frnds[1]);
// console.log("Welcome " +arr_frnds[2]);


// Q13
// const arr_cars: string[] = ["Fortuner", "Mercedes G-Wagon", "Supra"]
// const mesgg: string = "I would like to own a ";
// console.log(mesgg + arr_cars[0]);
// console.log(mesgg + arr_cars[1]);
// console.log(mesgg + arr_cars[2]);

// Q14
// const arr_guest: string[] = ["Ahmed", "Ashar", "Shayan"]
// const mesgg: string = "I would like invite ";
// for (let i = 0; i<arr_guest.length; i++){
//     console.log(mesgg + arr_guest[i] + " to our home at dinner")
// }


// Q 15
// const arr_guest: string[] = ["Ahmed", "Ashar", "Shayan"]
// const mesgg: string = "I would like invite ";
// for (let i = 0; i<arr_guest.length; i++){
//     console.log(mesgg + arr_guest[i] + " to our home at dinner")
// }

// let unableToAttend: string = "Ashar";
// let newGuest: string = "Faizan";

// let index : number = arr_guest.indexOf(unableToAttend);
// if(index !== -1){
//     arr_guest.splice(index, 1, newGuest)
// }

// console.log("Updated invitations List of Guests");
// for (let i = 0; i<arr_guest.length; i++){
//     console.log(mesgg + arr_guest[i] + " to our home at dinner")
// }
// console.log(unableToAttend + " cannot come");


// Q 16
// const arr_guest: string[] = ["Ahmed", "Ashar", "Shayan"]
// const mesgg: string = "I would like invite ";
// for (let i = 0; i<arr_guest.length; i++){
//     console.log(mesgg + arr_guest[i] + " to our home at dinner")
// }

// let unableToAttend: string = "Ashar";
// let newGuest: string = "Faizan";

// let index : number = arr_guest.indexOf(unableToAttend);
// if(index !== -1){
//     arr_guest.splice(index, 1, newGuest)
// }

// console.log("Updated invitations List of Guests");
// for (let i = 0; i<arr_guest.length; i++){
//     console.log(mesgg + arr_guest[i] + " to our home at dinner")
// }
// console.log(unableToAttend + " cannot come");
// console.log();
// console.log("Now i found a bigger table so i could invite more people");
// arr_guest.unshift("Khalil")
// arr_guest.splice(arr_guest.length/2, 0, "Mustafa")
// arr_guest.push("Salaman")

// for (let i = 0; i<arr_guest.length; i++){
//     console.log(mesgg + arr_guest[i] + " to our home at dinner")
// }

// Q 17
// const arr_guest: string[] = ["Ahmed", "Ashar", "Shayan"]
// const mesgg: string = "I would like invite ";
// for (let i = 0; i<arr_guest.length; i++){
//     console.log(mesgg + arr_guest[i] + " to our home at dinner")
// }

// let unableToAttend: string = "Ashar";
// let newGuest: string = "Faizan";

// let index : number = arr_guest.indexOf(unableToAttend);
// if(index !== -1){
//     arr_guest.splice(index, 1, newGuest)
// }

// console.log("Updated invitations List of Guests");
// for (let i = 0; i<arr_guest.length; i++){
//     console.log(mesgg + arr_guest[i] + " to our home at dinner")
// }
// console.log(unableToAttend + " cannot come");
// console.log();
// console.log("Now i found a bigger table so i could invite more people");
// arr_guest.unshift("Khalil")
// arr_guest.splice(arr_guest.length/2, 0, "Mustafa")
// arr_guest.push("Salaman")

// for (let i = 0; i<arr_guest.length; i++){
//     console.log(mesgg + arr_guest[i] + " to our home at dinner")
// }
// console.log();
// console.log("I can invite only 2 people for dinner");

// for (let i = arr_guest.length; i>2; i--){
//     console.log("sory " + arr_guest[i-1]);
//     arr_guest.pop()
// }

// for (let i = 0; i<arr_guest.length; i++){
//     console.log("You're still invited " + arr_guest[i] + " to our home at dinner")
// }


// Q18
// let placesToVisit: string[] = [
//     "Makkah",
//     "Madinah",
//     "US",
//     "Australia",
//     "SwitzerLand"
// ];
// console.log(placesToVisit);
// console.log([...placesToVisit].sort());
// console.log()
// console.log(placesToVisit);
// console.log([...placesToVisit].sort().reverse());
// console.log()
// console.log(placesToVisit.reverse());
// console.log();
// console.log(placesToVisit.sort());


// Q19
// console.log("i am inviting 2 people");

// Q20
// let countriess: string[] = [
//     "Pakistan",
//     "China",
//     "United States",
//     "Brazil",
//     "India",
//   "Russia"
// ];

// console.log("List of Famous Countries:");
// countriess.forEach((place, index) => {
//     console.log(`${index + 1}. ${place}`);
// });


// Q21
// let countries = [
//     {
//         name: "Pakistan",
//         capital: "Islamabad",

//     },
//     {
//         name: "United States",
//         capital: "Washington, D.C.",
     
//     },
//     {
//         name: "China",
//         capital: "Beijing",

//     },
//     {
//         name: "India",
//         capital: "New Delhi",

//     },
//     {
//         name: "Brazil",
//         capital: "Brasília",

//     },
//     {
//         name: "Russia",
//         capital: "Moscow",
//     },
// ];

// countries.forEach(country => {
//     console.log(`Country: ${country.name}`);
//     console.log(`Capital: ${country.capital}`);
// });


// Q 22
let colors: string[] = ["red", "green", "blue"];

let invalidIndex = 3; // This index is invalid because the array has only 3 elements
let color = colors[invalidIndex]; // This line will cause an index error

// Correct the error by handling the invalid index
if (color !== undefined) {
    console.log("Color:", color);
} else {
    console.log("Invalid index! The array does not contain an element at index", invalidIndex);
}

// Q 23
let a = 5;
let b = 10;

console.log("Is a == 5? I predict True.");
console.log(a == 5); // True

console.log("Is b > a? I predict True.");
console.log(b > a); // True

console.log("Is a == 5 AND b == 10? I predict True.");
console.log(a == 5 && b == 10); // True

console.log("Is a == 5 OR b == 5? I predict True.");
console.log(a == 5 || b == 5); // True

console.log("Is NOT(b < a)? I predict True.");
console.log(!(b < a)); // True


console.log("Is a != 5? I predict False.");
console.log(a != 5); // False

console.log("Is b < a? I predict False.");
console.log(b < a); // False

console.log("Is a >= 10? I predict False.");
console.log(a >= 10); // False

console.log("Is b <= 4? I predict False.");
console.log(b <= 4); // False

console.log("Is NOT((a == 5) and (b == 5))? I predict False.");
console.log(!((a == 5) && (b == 5))); // False


// q24
// let str1: string = "hello";
// let str2: string = "world";
// console.log(str1 === str2);  
// console.log(str1 !== str2);  

// let string3: string = "Hello";
// let string4: string = "HELLO";
// console.log(string3.toLowerCase() === string4.toLowerCase());  
// console.log(string3.toLowerCase() !== string4.toLowerCase());  

// let num1: number = 5;
// let num2: number = 10;
// console.log(num1 === num2);  
// console.log(num1 !== num2);  
// console.log(num1 > num2);    
// console.log(num1 < num2);    
// console.log(num1 >= num2);   
// console.log(num1 <= num2);   

// let num3: number = 15;
// let num4: number = 20;
// console.log(num3 < num4 && num3 !== num4);  
// console.log(num3 === num4 || num3 > num4); 

// let array1: number[] = [1, 2, 3, 4, 5];
// console.log(array1.includes(3));  
// console.log(array1.includes(6));  

// console.log(!array1.includes(3)); 
// console.log(!array1.includes(6)); 


// q25
// let alien_color: string = 'green';

// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points!");
// }


// q26
// let alien_colorr: string = 'yellow';

// if (alien_colorr === 'green') {
//     console.log("Congratulations! You just earned 5 points!");
// }else{
//     console.log("Congratulations! You just earned 10 points.");
// }

//q27
// let alien_color: string = 'green';

// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points!");
// }else if(alien_color === 'yellow'){
//     console.log("Congratulations! You just earned 10 points.");
// }else if(alien_color === 'red'){
//     console.log("Congratulations! You just earned 15 points.");
// }

// let alien_color: string = 'yellow';

// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points!");
// }else if(alien_color === 'yellow'){
//     console.log("Congratulations! You just earned 10 points.");
// }else if(alien_color === 'red'){
//     console.log("Congratulations! You just earned 15 points.");
// }

// let alien_color: string = 'red';

// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points!");
// }else if(alien_color === 'yellow'){
//     console.log("Congratulations! You just earned 10 points.");
// }else if(alien_color === 'red'){
//     console.log("Congratulations! You just earned 15 points.");
// }

// 28
// let age: number = 42;

// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }

//q29
// let favorite_fruits: string[] = ['apple', 'banana', 'orange'];

// if (favorite_fruits.includes('apple')) {
//     console.log("You really like apples!");
// }

// if (favorite_fruits.includes('banana')) {
//     console.log("You really like bananas!");
// }

// if (favorite_fruits.includes('orange')) {
//     console.log("You really like oranges!");
// }

// if (favorite_fruits.includes('mango')) {
//     console.log("You really like oranges!");
// }

// if (favorite_fruits.includes('strawberry')) {
//     console.log("You really like strawberries!");
// }


// q 30
// const admin_Array : string[] = ["admin", "Taha", "ahmed","sohail", "Faizan"];
// for (let i = 0; i < admin_Array.length ; i++){
//     if(admin_Array[i] == "admin"){
//         console.log( `Hello ${admin_Array[i]}, would you like to see a status report?`);
//     }else{
//         console.log( `Hello ${admin_Array[i]}, thank you for logging in again.`);
//     }
// }

// Q 31
// const admin_Array : string[] = ["admin", "Taha", "ahmed","sohail", "Faizan"];
// admin_Array.splice(0, admin_Array.length)

// if(admin_Array.length > 0){
//     for (let i = 0; i < admin_Array.length ; i++){
//         if(admin_Array[i] == "admin"){
//             console.log( `Hello ${admin_Array[i]}, would you like to see a status report?`);
//         }else{
//             console.log( `Hello ${admin_Array[i]}, thank you for logging in again.`);
//         }
//     }
// }else{
//     console.log("We need to find some users!");
// }

// q32
// let current_users: string[] = ["Taha", "ahmed","sohail", "Faizan", "Charlie"];
// let new_users: string[] = ['Alice', 'Dave', 'Frank', 'Eve', 'Grace'];

// for (let new_user of new_users) {
//     let is_taken: boolean = false;
//     for (let current_user of current_users) {
//         if (new_user.toLowerCase() === current_user.toLowerCase()) {
//             is_taken = true;
//             break;
//         }
//     }
//     if (is_taken) {
//         console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Congratulations! ${new_user} is available.`);
//     }
// }


// q 33
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let number of numbers) {
//     let ordinal: string;
//     if (number === 1) {
//         ordinal = "1st";
//     } else if (number === 2) {
//         ordinal = "2nd";
//     } else if (number === 3) {
//         ordinal = "3rd";
//     } else {
//         ordinal = number + "th";
//     }
//     console.log(ordinal);
// }

// Q 34
// let favorite_pizzas: string[] = ['Pepperoni', 'Fajita', 'BBQ Chicken'];

// for (let pizza of favorite_pizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// console.log("Pizza is so delicious , I really love pizza!");

// q 35
// List of animals with a common characteristic
const animals: string[] = ['dog', 'cat', 'rabbit']

console.log("Statements about each animal:");
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("All of these animals are common household pets.");

const make_shirt = (size:string, design = "sehri ka scene on")=>{
    console.log(`The size of this T-shirt is ${size} and print is ${design}`);
    
}
make_shirt("small", "codewithtaha");

// q 37
make_shirt("large", "i love typescript");
make_shirt("meduim", "codewithtaha");
make_shirt("large", "codewithtaha");
make_shirt("xxl");


// q 38
function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Tokyo'); 

// q 39
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}
const output1 = cityCountry('Lahore', 'Pakistan')
console.log(output1);
const output2 =  cityCountry('New York', 'USA')
console.log(output2);
const output3 =  cityCountry('Tokyo', 'Japan')
console.log(output3);


// q 40
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

const album1: Album = makeAlbum('Artist 1', 'me gane nhi sunta');
const album2: Album = makeAlbum('Artist 2', 'Album 2', 12);
const album3: Album = makeAlbum('Artist 3', 'Album 3', 8);

console.log(album1);
console.log(album2);
console.log(album3);

// q 41
// function showMagicians(magicians: string[]) {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// const magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// showMagicians(magicianNames);

// q 42
// const makeGreat = (magicians: string[])=> {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = `the Great ${magicians[i]}`;
//     }
// }

// makeGreat(magicianNames);
// showMagicians(magicianNames);

// q 43
const showMagicians = (magicians: string[])=> {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
}

const magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

const greatMagicianNames: string[] = makeGreat([...magicianNames]); 

console.log("Original Magician Names:");
showMagicians(magicianNames);

console.log("Great Magician Names:");
showMagicians(greatMagicianNames);


// q 44
// const orderSandwich = (...items: string[])=> {
//     console.log("Sandwich order summary:");
//     if (items.length === 0) {
//         console.log("No items provided for the sandwich.");
//     } else {
//         console.log("Items included in the sandwich:");
//         items.forEach(item => {
//             console.log("- " + item);
//         });
//     }

// }

// orderSandwich('Ham', 'Cheese', 'Lettuce');
// orderSandwich('Turkey', 'Swiss cheese');
// orderSandwich('Russian salad');


// q 45
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

const myCar: Car = createCar('Toyota', 'Camry', ['color', 'red'], ['year', 2022]);

console.log(myCar);
