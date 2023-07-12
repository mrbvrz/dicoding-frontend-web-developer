import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restaurant from '../public/data/DATA.json';

console.log('Hello Coders! :)');

console.log(restaurant);

const mobile_menu= document.querySelector('.mobile-menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const nav = document.querySelector('.nav');

mobile_menu.addEventListener('click', function (event) {
    nav.classList.toggle('mobile-menu-transform');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    nav.classList.remove('mobile-menu-transform');
});

main.addEventListener('click', function () {
    nav.classList.remove('mobile-menu-transform');
});

function getData(data) {
    let renderData = '';

    data.restaurants.forEach((data, i) => {
        renderData += `
            <div tabindex="0" class="card-item">
                <img tabindex="0" class="card-image" src="${data.pictureId}" alt="${data.name}">
                <span tabindex="-1" class="card-item-rating"><i class="fa-solid fa-star"></i> ${data.rating}</span>
                <div class="card-info">
                    <h2 tabindex="0" class="card-name">${data.name}</h2>
                    <h3 tabindex="0" class="card-area"><i class="small-icon fa-solid fa-location-dot"></i> ${data.city}</h3>
                    <h3 tabindex="0" class="card-description">${data.description}</h3>
                </div>
            </div>
        `
    })

    document.getElementById('card-list').innerHTML = renderData;
}

getData(restaurant)
