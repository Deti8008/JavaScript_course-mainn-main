//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//   }
function filterList() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("myList");
    var li = ul.getElementsByTagName("li");

    if (input.value === "") {
        ul.style.display = "none";
        return;
    } else {
        ul.style.display = "block";
    }

    for (var i = 0; i < li.length; i++) {
        var txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "list-item";
        } else {
            li[i].style.display = "none";
        }
    }
}