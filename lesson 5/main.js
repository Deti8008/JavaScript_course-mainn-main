// var mosha = 15;

// if(mosha >= 18){
//     console.log("You can apply for your driver's license!");
// }
// else{
//     console.log("You are too yound to drive!");
// }

// var mosha = 45;

// if(mosha <= 12){
//     console.log("You are still a kid!");
//     console.log("You are still a kid!");
//     console.log("You are still a kid!");
// }
// else if(mosha <= 19){
//     console.log("You are a teenager!");
// }
// else if(mosha <= 65){
//     console.log('You are an adult!')
// }
// else{
//     console.log('You are an old person!');
//     console.log('You are an old person!');
// }
// var mosha = document.getElementById('mosha_id');
// var button = document.getElementById('button_id');
// var text = document.getElementById('text_id');


// button.onclick = function(){
//     if(mosha.value <= 12){
//         text.innerHTML = "You are still a kid!";
//     }
//     else if(mosha.value <= 19){
//         text.innerHTML = "You are a teenager!";
//     }
//     else if(mosha.value <= 65){
//         text.innerHTML = "You are an adult!";
//     }
//     else{
//         text.innerHTML = "You are an old person!";
//     }
// }

// var input = document.querySelector('input');
// var button = document.getElementById('button_id');
// var text = document.getElementById('text_id');

// button.onclick = function(){
//     text.innerHTML = input.value;
// }

// CHALLENGE
// Useri duhet te jape 2 vlera numerike nepermjet input fields-ave dhe per ato 2 vlera numerike te llogaritet shuma. Shuma te behet display duke perdorur heading tag.

// psh.
// First Number: 5
// Second Number: 7
// Rezultati: 12

// var input_1 = document.getElementById('num_1');
// var input_2 = document.getElementById('num_2');
// var output = document.getElementById('sum');
// var button = document.getElementById('calculate');

// button.addEventListener('click', function(){
//     output.innerHTML = "Rezultati: " + (parseInt(input_1.value) + parseInt(input_2.value));
// });

var vlera_a = document.getElementById('value1');
var vlera_b = document.getElementById('value2');
var button = document.getElementById('btn_id');
var rezultati = document.getElementById('solution');

button.addEventListener('click', function(){
    rezultati.innerHTML = 'Rezultati: ' + parseInt(Math.sqrt((parseInt(vlera_a.value) ** 2) + (parseInt(vlera_b.value) ** 2)));
});