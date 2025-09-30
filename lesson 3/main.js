// var button1 = document.getElementById('btn1')

// button1.onclick = function(){
//     alert('helo');
// }


// // var button_click = document.querySelector('button')

// // button_click.onclick = function(){
// //     alert('told u not to click me')
// // }


// // event lsteners
// var button2 = document.getElementById('btn2')

// button2.addEventListener('click', function(){
//     alert('Dont clck')
// });


// var button3 = document.getElementById('btn3')

// function function_1(){
//     console.log('function 1 has been executted')
// }

// function function_2(){
//     console.log('function 2 has been executted')
// }

// button3.addEventListener('mouseover', function_1)

// button3.addEventListener('click', function_2)

// styling using js 

var ds_button = document.getElementById('btn4');
var ds_text = document.getElementById('text');
var hide_btn = document.getElementById('hidebtn')
var circlebtn = document.getElementById('circlebtn')

ds_button.onclick = function(){
    ds_text.style.display = "block"
    ds_text.style.color = 'red';
    ds_text.style.backgroundColor = 'lightgray'
    ds_text.style.textAlign = 'center'
    ds_text.style.fontSize = '100px'
    ds_text.style.padding = '20px'
    ds_text.style.transitionTimingFunction = 'ease-in-out'
    ds_text.style.transition = '2s'
}

ds_text.onmouseover = function(){
    ds_text.style.cssText = 'color: blue; background-color: yellow; padding: 20px; text-align: center; font-size: 100px;'
}

ds_button.onmouseleave = function(){
    ds_text.setAttribute("class", "webAnimation");
}

hide_btn.onclick = function(){
    ds_text.setAttribute("class", "hideClass" )
}

circlebtn.onclick = function(){
    circlebtn.setAttribute("class", "circle" )
}

