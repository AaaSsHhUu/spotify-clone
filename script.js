const sidebar = document.getElementById("sidebar");
const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");

function showMenu(){
    sidebar.style.left = '0';
    sidebar.style.width = "100%";
}
function hideMenu(){
    sidebar.style.width = "330px";
    sidebar.style.left = "-350px";
}