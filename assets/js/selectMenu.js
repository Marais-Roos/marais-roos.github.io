//
// Load projects
//
let cardA = document.getElementById('pA');
let cardB = document.getElementById('pB');
let cardC = document.getElementById('pC');
let cardD = document.getElementById('pD');

let linkAll = document.getElementById('linkAll');
let linkDesign = document.getElementById('linkDesign');
let linkWebDev = document.getElementById('linkWebDev');
let linkSoftware = document.getElementById('linkSoftware');
let linkCopywrite = document.getElementById('linkCopywrite');


let 

function addSelected(element) {
  let className = 'selected';
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ' ' + className;
  }
}

function removeSelected(element) {
  let className = 'selected';
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

function loadAll() {
  cardA.style.background = "url('https://via.placeholder.com/400') white no-repeat center";
  cardB.style.background = "url('https://via.placeholder.com/510x815') white no-repeat center";
  cardC.style.background = "url('https://via.placeholder.com/300x815') white no-repeat center";
  cardD.style.background = "url('https://via.placeholder.com/400') white no-repeat center";

  addSelected(linkAll);
  removeSelected(linkDesign);
  removeSelected(linkWebDev);
  removeSelected(linkSoftware );
  removeSelected(linkCopywrite);
}

function loadWebDesign() {
  cardA.style.background = "url('https://via.placeholder.com/400/0000FF') white no-repeat center";
  cardB.style.background = "url('https://via.placeholder.com/510x815/0000FF') white no-repeat center";
  cardC.style.background = "url('https://via.placeholder.com/300x815/0000FF') white no-repeat center";
  cardD.style.background = "url('https://via.placeholder.com/400/0000FF') white no-repeat center";

  removeSelected(linkAll);
  addSelected(linkDesign);
  removeSelected(linkWebDev);
  removeSelected(linkSoftware );
  removeSelected(linkCopywrite);
}

function loadWebDevelopment() {
  cardA.style.background = "url('https://via.placeholder.com/400/000000') white no-repeat center";
  cardB.style.background = "url('https://via.placeholder.com/510x815/000000') white no-repeat center";
  cardC.style.background = "url('https://via.placeholder.com/300x815/000000') white no-repeat center";
  cardD.style.background = "url('https://via.placeholder.com/400/000000') white no-repeat center";

  removeSelected(linkAll);
  removeSelected(linkDesign);
  addSelected(linkWebDev);
  removeSelected(linkSoftware);
  removeSelected(linkCopywrite);
}

function loadSoftwareDevelopment() {
  cardA.style.background = "url('https://via.placeholder.com/400/DDD') white no-repeat center";
  cardB.style.background = "url('https://via.placeholder.com/510x815/DDD') white no-repeat center";
  cardC.style.background = "url('https://via.placeholder.com/300x815/DDD') white no-repeat center";
  cardD.style.background = "url('https://via.placeholder.com/400/DDD') white no-repeat center";

  removeSelected(linkAll);
  removeSelected(linkDesign);
  removeSelected(linkWebDev);
  addSelected(linkSoftware );
  removeSelected(linkCopywrite);
}

function loadCopywriting() {
  cardA.style.background = "url('https://via.placeholder.com/400/333') white no-repeat center";
  cardB.style.background = "url('https://via.placeholder.com/510x815/333') white no-repeat center";
  cardC.style.background = "url('https://via.placeholder.com/300x815/333') white no-repeat center";
  cardD.style.background = "url('https://via.placeholder.com/400/333') white no-repeat center";

  removeSelected(linkAll);
  removeSelected(linkDesign);
  removeSelected(linkWebDev);
  removeSelected(linkSoftware);
  addSelected(linkCopywrite);
}