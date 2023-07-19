import { itActAsFavoriteRestoModel } from './contract/favRestaurantContract';
import favoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await favoriteRestoIdb.getAllResto()).forEach(async (resto) => {
            await favoriteRestoIdb.deleteResto(resto.id);
        });
    });

    itActAsFavoriteRestoModel(favoriteRestoIdb);
});
