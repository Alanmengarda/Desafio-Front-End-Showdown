let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type) {
    let listItem = document.querySelectorAll('.list .list-item')
    let thumbItem = document.querySelectorAll('.thumb .thumb-item')

    
    if(type === 'next'){
        list.appendChild(listItem[0])
        thumb.appendChild(thumbItem[0])
        container.classList.add('next')
    } else {
        list.prepend(listItem[listItem.length - 1])
        thumb.prepend(thumbItem[thumbItem.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 4000)



}

document.addEventListener("scroll", function() {
  const navbar = document.querySelector("nav");

  if (window.scrollY > 50) {
    navbar.classList.add("visivel");   // aplica a classe -> aparece
  } else {
    navbar.classList.remove("visivel"); // remove a classe -> some
  }
});




//sidebar

// Toggle da sidebar
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar .toggle-btn');

// Clique no botão continua funcionando
toggleBtn.addEventListener('click', () => {
  if (sidebar.classList.contains('expanded')) {
    sidebar.classList.remove('expanded');
    sidebar.classList.add('collapsed');
  } else {
    sidebar.classList.remove('collapsed');
    sidebar.classList.add('expanded');
  }
});

// Expande ao passar o mouse
sidebar.addEventListener('mouseenter', () => {
  sidebar.classList.remove('collapsed');
  sidebar.classList.add('expanded');
});

// Recolhe ao tirar o mouse de cima
sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.remove('expanded');
  sidebar.classList.add('collapsed');
});


