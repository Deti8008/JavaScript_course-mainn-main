$("#btn").click(function() {
-    console.log($('#h1').text());
-    $('#h1').text("Hello, World!");
-    $('#h1').append("&nbsp;bobyy");
-    $('#h1').css("color", "red");
-    $('#h1').css("background-color", "cream");
-    $('#h1').css("border", "1px solid black"); 
});

$('#button').click(function() {
    $(this).addClass('clicked');
})
.find('span')
.attr('title', 'I ma a tooltip');





$(".hidden").show(600);

$(".square").animate({
    height: '200px',
    width: '200px',      
})       

// $(".testing").fadeOut(2000).fadeIn(2000).fadeOut(2000).fadeIn(2000);
$(".testing").animate({
    width : '+=100px',
    fontSize : '20px',
    // opacity : '0.5',
}, 5000,
function() {
    // Animation complete.
    alert("Animation complete");
})




// var newimage = $('<img>', {
//             src: 'download.png', // Make sure this path is correct
//             alt: 'Added Image',
//             css: { height: '32px', 'vertical-align': 'middle', 'margin-left': '8px' }
//         });
//         $("#h1").append(newimage);