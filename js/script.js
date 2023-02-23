
document.getElementById("btnOpen").addEventListener("click", openCloseMenu);
document.getElementById("btnChangeColor").addEventListener("click", changeColor);
document.getElementById("btnChangeColor2").addEventListener("click", changeColor2);
document.getElementById("btnChangeColor3").addEventListener("click", changeColor3);

var sideMenu = document.getElementById("menuSide");
var btn_open = document.getElementById("btnOpen");
var body = document.getElementById("body");



function openCloseMenu(){
    body.classList.toggle("bodyMove");
    sideMenu.classList.toggle("menuSideMove");
    btn_open.classList.toggle("btnChangePos");
};

function changeColor(){
    document.getElementById('styleCSS').href='css/styles2.css';
};
function changeColor2(){
    document.getElementById('styleCSS').href='css/styles3.css';
};
function changeColor3(){
    document.getElementById('styleCSS').href='css/styles.css';
};


