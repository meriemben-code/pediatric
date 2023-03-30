let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 
var content = document.getElementsByTagName('header')[0];
var content1 = document.getElementsByTagName('body')[0];


var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
   
    content1.classList.toggle('night');
    darkMode.src="image/brightness.png"
})