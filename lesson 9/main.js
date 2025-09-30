// callback jan funksione qe mund te jepen si argumente te ni funksion tjeter 
// function printNames(){
//     document.write("ylli");
//     document.write("<br>");
//     setTimeout(function(){document.write('anna');}, 3000)
//     document.write("amet");
// }
// printNames()

var colors =  ['red' , 'blue', 'green', 'pink']

function changeBcolor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random() * colors.length)];
}

var names = ['anna', 'ylli','amet', 'liti']
function changenames(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random() * names.length)];
}

setInterval(changenames, 1000);
setInterval(changeBcolor, 1000);