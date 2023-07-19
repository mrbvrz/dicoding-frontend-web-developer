import urlParser from '../../routes/url-parser';
import myRestoSource from '../../data/my-resto-source';
import { createTemplateDetailResto, loading } from '../templates/template-creator';
import likeButtonPresenter from '../../utils/like-button-presenter';
import favoriteRestoIdb from '../../data/favorite-resto-idb';
import addNewReview from '../../utils/add-new-review';

const detail = {
    async render() {
        return `
        <div class="container">
        <div class="load"></div>
        <section class="content-wrapper">
        <div class="content-section" id="content-section">
          <div id="detail"></div>
          <div id="likeButtonContainer"></div>
          <div class="customer-reviews">
          <h2>Tambahkan ulasan</h2>
            <div class="review-form">
              <div class="input-form">
                <div>
                    <label for="reviewerName">Nama</label><br>
                    <input type="text" name="nama" id="reviewerName" placeholder="Masukkan nama anda" required>
                </div>
                <div>
                    <label for="reviewContent">Ulasan</label><br>
                    <textarea row="50" name="content" id="reviewContent" placeholder="Masukkan ulasan anda tentang restoran ini" required></textarea>
                </div>
              </div>
              <button class="submit-btn" id="submit" aria-label="Submit my review"><i class="fa-solid fa-plus"></i> Tambah ulasan</button>
            </div>
          </div>
          </div>
        </section>
        </div>
        `;
    },

    async afterRender() {
        const load = document.querySelector('.load');
        const content = document.querySelector('.content-wrapper');
        const resultContainer = document.querySelector('#detail');
        const url = urlParser.parseActiveUrlWithoutCombiner();
        content.style.display = 'none';
        load.innerHTML = loading();
        try {
            const result = await myRestoSource.restaurantListDetail(url.id);
            resultContainer.innerHTML = createTemplateDetailResto(result.restaurant);
            addNewReview.post(url);
            likeButtonPresenter.init({
                likeButtonContainer: document.querySelector('#likeButtonContainer'),
                favoriteRestaurant: favoriteRestoIdb,
                restaurant: {
                    id: result.restaurant.id,
                    name: result.restaurant.name,
                    address: result.restaurant.address,
                    city: result.restaurant.city,
                    categories: result.restaurant.categories,
                    menus: result.restaurant.menus,
                    rating: result.restaurant.rating,
                    pictureId: result.restaurant.pictureId,
                    description: result.restaurant.description,
                    customerReviews: result.restaurant.customerReviews,
                },
            });
            content.style.display = 'block';
            load.style.display = 'none';
        } catch (error) {
            content.style.display = 'block';
            load.style.display = 'none';
            content.innerHTML = `<b>Error: please check your internet connection...</b> ${error}`;
        }
    },
};

export default detail;
