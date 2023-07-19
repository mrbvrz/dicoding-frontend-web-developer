import likeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import favoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await likeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: favoriteRestoIdb,
        restaurant,
    });
};

export { createLikeButtonPresenterWithRestaurant };
