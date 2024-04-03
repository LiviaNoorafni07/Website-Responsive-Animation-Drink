let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// resposif ketika layar menjadi 940px
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}