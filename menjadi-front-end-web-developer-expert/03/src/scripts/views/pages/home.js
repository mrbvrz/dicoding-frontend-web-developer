import myRestoSource from '../../data/my-resto-source';
import {
    createTemplateResto,
    loading,
    createSkeletonTemplate,
} from '../templates/template-creator';

const home = {
    async render() {
        return `
        <div class="container">
            <div class="load"></div>
                <section class="content-wrapper">
                    <div class="content-section" id="content-section">
                        <h2 class="content-section-label">Restoran Populer di Indonesia</h2>
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
        const load = document.querySelector('.load');
        const content = document.querySelector('.content-wrapper');
        const restoContainer = document.querySelector('#card-list');
        content.style.display = 'none';
        load.innerHTML = loading();

        try {
            const restaurant = await myRestoSource.restaurantList();
            restoContainer.innerHTML = '';
            restaurant.forEach((resto) => {
                restoContainer.innerHTML += createTemplateResto(resto);
            });
            content.style.display = 'block';
            load.style.display = 'none';
        } catch (error) {
            content.style.display = 'block';
            load.style.display = 'none';
            content.innerHTML = `<b>Error: Please check your connection...</b> ${error}`;
        }
    },
};

export default home;
