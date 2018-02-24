'use strict';
//header-and-nav-insert
//header
var topContainer = document.querySelector('.header-and-nav-insert');
var headerElement = document.createElement('header');
var titleElement = document.createElement('h1');
var textElement = document.createElement('p');
headerElement.classList = 'page-header header-site p-4';
titleElement.innerHTML = 'Nickstabadet';
textElement.innerHTML = 'Ett soligt sommarbad';
headerElement.appendChild(titleElement);
headerElement.appendChild(textElement);
//nav
var navElement = document.createElement('nav');
var buttonElement = document.createElement('button');
var spanElement = document.createElement('span');
var navDivElement = document.createElement('div');
var ulElement = document.createElement('ul');
var li1Element = document.createElement('li');
var li2Element = document.createElement('li');
var li3Element = document.createElement('li');
var li4Element = document.createElement('li');
var a1Element = document.createElement('a');
var a2Element = document.createElement('a');
var a3Element = document.createElement('a');
var a4Element = document.createElement('a');
navElement.classList = 'bg-primary mb-2 navbar navbar-expand-md navbar-light';
buttonElement.className = 'navbar-toggler';
buttonElement.setAttribute("data-toggle", "collapse");
buttonElement.setAttribute("data-target", "#nynas-navbar");
spanElement.className = 'navbar-toggler-icon';
buttonElement.appendChild(spanElement);
navElement.appendChild(buttonElement);
navDivElement.id = 'nynas-navbar';
navDivElement.classList = 'navbar-collapse collapse';
ulElement.className = 'navbar-nav';
li1Element.className = 'nav-item';
li2Element.className = 'nav-item';
li3Element.className = 'nav-item';
li4Element.className = 'nav-item';
a1Element.innerHTML = 'Hem';
a2Element.innerHTML = 'Kontakt';
a3Element.innerHTML = 'Väder';
a4Element.innerHTML = 'Tillbaks';
a1Element.href = 'index.html';
a2Element.href = 'contact.html';
a3Element.href = 'status.html';
a4Element.href = 'javascript:history.back()';
a4Element.classList = 'nav-link font-weight-bold text-white';
var checkurl = window.location.href.split("/");
if (checkurl[checkurl.length-1] == 'index.html' || checkurl[checkurl.length-1] =='') {
    a1Element.classList = 'nav-link font-weight-bold text-dark';
    a2Element.classList = 'nav-link font-weight-bold text-white';
    a3Element.classList = 'nav-link font-weight-bold text-white';
}else if(checkurl[checkurl.length-1] == 'contact.html'){
    a1Element.classList = 'nav-link font-weight-bold text-white';
    a2Element.classList = 'nav-link font-weight-bold text-dark';
    a3Element.classList = 'nav-link font-weight-bold text-white';
}else if(checkurl[checkurl.length-1] == 'status.html'){
    a1Element.classList = 'nav-link font-weight-bold text-white';
    a2Element.classList = 'nav-link font-weight-bold text-white';
    a3Element.classList = 'nav-link font-weight-bold text-dark';
}
li1Element.appendChild(a1Element);
li2Element.appendChild(a2Element);
li3Element.appendChild(a3Element);
li4Element.appendChild(a4Element);
ulElement.appendChild(li1Element);
ulElement.appendChild(li2Element);
ulElement.appendChild(li3Element);
ulElement.appendChild(li4Element);
navDivElement.appendChild(ulElement);
navElement.appendChild(navDivElement);

//add header and nav to html
topContainer.appendChild(headerElement);
topContainer.appendChild(navElement);


//footer-insert
var footerContainer = document.querySelector('.footer-insert');
var divElement = document.createElement('div');
var pElement = document.createElement('p');
var aElement = document.createElement('a');
divElement.classList = 'card-footer text-muted fixed-bottom bg-light';
pElement.className = 'text-center';
pElement.innerHTML = 'Vill du veta mer? Skicka e-post till ';
aElement.className = 'text-primary';
aElement.href = 'mailto:fredrik.frolund@live.se';
aElement.innerHTML = 'fredrik.frolund@live.se';
pElement.appendChild(aElement);
divElement.appendChild(pElement);
footerContainer.appendChild(divElement);