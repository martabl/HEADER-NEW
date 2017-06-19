
'use strict';

var menu = document.querySelector('.nav-small');
var toggleMenu = function () {
  menu.classList.toggle('hide');
};

document.getElementById('js-button-burguer').addEventListener('click', toggleMenu);

var hideMenu = function () {
  menu.classList.add('hide');
};

var smallMenuLinkList = document.querySelectorAll('.nav-small li a');
for (var i = 0; i < smallMenuLinkList.length; i++) {
  smallMenuLinkList[i].addEventListener('click', hideMenu);
}
