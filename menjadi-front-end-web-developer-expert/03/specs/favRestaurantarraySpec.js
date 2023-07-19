import { itActAsFavoriteRestoModel } from './contract/favRestaurantContract';

let favRestaurant = [];

const favoriteRestoArray = {
    getResto(id) {
        if (!id) {
            return;
        }

        return favRestaurant.find((restaurant) => restaurant.id === id);
    },

    getAllResto() {
        return favRestaurant;
    },

    putResto(resto) {
        if (!resto.hasOwnProperty('id')) {
            return;
        }

        if (this.getResto(resto.id)) {
            return;
        }

        favRestaurant.push(resto);
    },

    deleteResto(id) {
        favRestaurant = favRestaurant.filter((resto) => resto.id !== id);
    },
};

describe('Favorite resto array contract test', () => {
    afterEach(() => (favRestaurant = []));

    itActAsFavoriteRestoModel(favoriteRestoArray);
});
