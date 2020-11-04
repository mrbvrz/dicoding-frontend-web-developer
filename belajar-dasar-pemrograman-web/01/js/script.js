function toggle() {
    var header = document.getElementById("header");
    header.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".header-menu li a:not([href='#'])");
    for (var x = 0; x < links.length; x++) {
        links[x].onclick = function () {
            document.querySelector(".toggle").click();
        };
    }
});