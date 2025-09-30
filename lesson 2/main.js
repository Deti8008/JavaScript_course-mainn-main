// function bonBajram(){
 //     alert("E gzofshi Bajramin!");
 //     alert("Welcome to the Digital School!");
 // }
 
 // bonBajram();
 
 // -----------------------------------------
 
 // num_1 dhe num_2 quhen parametra / parametra hyrese
 // function shuma_2_numra(num_1, num_2){
 //     console.log('Ky funksion do e llogarise shumen e 2 numrave');
 //     console.log('Vlera e numrit 1 eshte:', num_1);
 //     console.log('Vlera e numrit 2 eshte:', num_2);
 //     console.log('Shuma e numrave 1 dhe 2 eshte:', num_1 + num_2);
 // }
 
 // 15 dhe 94 quhen argumente
 // shuma_2_numra(15, 94);
 
 // function sum(num_1, num_2){
 //     return num_1 + num_2;
 // }
 
 // console.log('Vlera e 2 numrave eshte:', sum(15, 15));
 
 
 // F = C × (9/5) + 32
 function toFahrenheit(number){
    F = number * (9/5) + 32
    return F
}
// function toFahrenheit(number){
//     F = number * (9/5) + 32
//     return F
// }

// console.log(toFahrenheit(22));

// // Arrow Functions
// var greeting = name => alert(`Hello and welcome, ${name}`);
// greeting('Agon');

// // Local Variables
// function dsFunction(){  
//     var localVar = 'Digital School';
//     alert(localVar);
// }

// dsFunction();


// Create a function that takes minutes as a parameter and returns seconds. 
// Example: 
// toSeconds(10)
// Result = 600 seconds


// function toSeconds(minutes){
//     return minutes * 60;
// }

// console.log(toSeconds(15));

// Funksion i cili do e llogarise perimetrin e katerkendeshit
// Formula: 2(lartesia + gjeresia)
// Result: 'Perimetri i katerkendeshit eshte: 120'   

// function rectanglePerimeter(lartesia, gjeresia){
//     return 2 * (lartesia + gjeresia);
// }

// console.log('Perimetri i katerkendeshit eshte:', rectanglePerimeter(20, 40));

// Objects

// var vetura = {
//     emri: 'Mercedes',
//     ngjyra: 'red', 
//     viti: 2020,
//     kilometrat: 12000,
//     ndizeMotorin: function(){
//         console.log('Vrooom!');
//     }
// }

// console.log(vetura.emri);
// console.log(vetura['emri']);
// vetura.ndizeMotorin();

// var name = 'test';
// var lokacioni = 'test@test';

// var shkolla_1 = {
//     name: 'Digital School',
//     lokacioni: 'Strasho Pindzur',
//     orari: '09:00 - 21:00',
//     info: function(){
//         console.log(this.name + ', ' + this.lokacioni + ', ' + this.orari + '.');
//     },
// }

// shkolla_1.info();

// delete shkolla_1.info; 

// shkolla_1.info();

// Getters and Setters

// var user = {
//     id: '001',
//     emri: 'Agon',
//     mbiemri: 'Adili',
//     email: 'agon@gmail.com',
//     password: '1234567',
//     username: 'agooonnn',

//     get getPassword(){
//         return this.password;
//     },

//     set setPassword(pass){
//         this.password = pass;
//     }
// };

// console.log(user.getPassword);
// user.setPassword = 321321;
// console.log(user.getPassword);

// Constructor

// function Computer(name, CPU, RAM, GPU){
//     this.name = name;
//     this.CPU = CPU;
//     this.RAM = RAM;
//     this.GPU = GPU;
// }

// var computer_1 = new Computer('MacBook Pro', 'M1 8-core', '8 GB', '5600M GPU');

// var computer_2 = new Computer('Acer', 'Intel Core i3', '16 GB', 'Integrated Graphics');

// console.log(computer_1.RAM);
// console.log(computer_2.RAM);

// Create a User constructor that will consist of the  following properties: 
// 1. Full Name
// 2. E-mail
// 3. Password
// 4. Phone Number
// 5. Birthday

// After creating the constructor, create 3 different objects using that constructor.

function User(fullName, email, password, phoneNumber, birthday){
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.birthday = birthday;
};

console.log(toFahrenheit(22));
var user_001 = new User('Agon Adili', 'agon@gmail.com', '123456', '077777777', '01.01.2025');

// Arrow Functions
var greeting = name => alert(`Hello and welcome, ${name}`);
greeting('Agon');
var user_002 = new User('Ylli Iljazi', 'ylli@gmail.com', '654321', '070000000', '02.02.2025');

// Local Variables
function dsFunction(){  
    var localVar = 'Digital School';
    alert(localVar);
}
var user_003 = new User('Agon Halili', 'agon2@gmail.com', '321321', '071111111', '03.03.2025');

dsFunction();
console.log(user_001);
console.log(user_002);
console.log(user_003);