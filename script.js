const sidebar = document.getElementById("sidebar");
const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");

function showMenu(){
    sidebar.style.left = '0';
}
function hideMenu(){
    sidebar.style.left = "-350px";
}