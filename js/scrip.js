let boxs = document.getElementById("frist-box");
let all = document.body;
function darkMode() {
    all.classList.toggle("dark-mode");

    if (boxs.style.backgroundColor != "hsl(230, 17%, 14%)") {
        boxs.style.backgroundColor = "hsl(230, 17%, 14%)"
    }
    else if (boxs.style.backgroundColor != "hsl(227, 47%, 96%)") {
        boxs.style.backgroundColor = "hsl(227, 47%, 96%)"
    }
}

