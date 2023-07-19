import favoriteRestoIdb from '../../data/favorite-resto-idb';
import {
    createTemplateResto,
    createSkeletonTemplate,
    createNoFavoriteTemplate,
    loading,
} from '../templates/template-creator';

const favorite = {
    async render() {
        return `
            <div class="container">
            <div class="load"></div>
                <section class="content-wrapper">
                    <div class="content-section" id="content-section">
                        <h2 class="content-section-label">Restoran Favorit Saya</h2>
                        <div class="content-card-section" id="card-list">
                            ${createSkeletonTemplate(20)}
                        </div>
                    </div>
                <section>
            </div>
        </div>
        `;
    },

    async afterRender() {
        const resto = await favoriteRestoIdb.getAllResto();
        const load = document.querySelector('.load');
        const content = document.querySelector('.content-wrapper');
        const restoContainer = document.querySelector('#card-list');
        content.style.display = 'none';
        load.innerHTML = loading();
        if (resto.length === 0) {
            restoContainer.innerHTML = '';
            content.innerHTML += createNoFavoriteTemplate();
            content.style.display = 'block';
            load.style.display = 'none';
        } else {
            try {
                restoContainer.innerHTML = '';
                resto.forEach((newResto) => {
                    restoContainer.innerHTML += createTemplateResto(newResto);
                });
                content.style.display = 'block';
                load.style.display = 'none';
            } catch (error) {
                content.style.display = 'block';
                load.style.display = 'none';
                content.innerHTML = `<b>Error: Please check your connection...</b> ${error}`;
            }
        }
    }
};

export default favorite;
