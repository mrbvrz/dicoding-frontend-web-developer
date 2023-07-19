const itActAsFavoriteRestoModel = (favoriteRestoIdb) => {
    it('should return the resto that has been added', async () => {
        favoriteRestoIdb.putResto({ id: 1 });
        favoriteRestoIdb.putResto({ id: 2 });

        expect(await favoriteRestoIdb.getResto(1)).toEqual({ id: 1 });
        expect(await favoriteRestoIdb.getResto(2)).toEqual({ id: 2 });
        expect(await favoriteRestoIdb.getResto(3)).toEqual(undefined);
    });

    it('should refuse a resto from being added if it does not have the correct property', async () => {
        favoriteRestoIdb.putResto({ aProperty: 'property' });

        expect(await favoriteRestoIdb.getAllResto()).toEqual([]);
    });

    it('can return all of the resto that have been added', async () => {
        favoriteRestoIdb.putResto({ id: 1 });
        favoriteRestoIdb.putResto({ id: 2 });

        expect(await favoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('should remove favorite resto', async () => {
        favoriteRestoIdb.putResto({ id: 1 });
        favoriteRestoIdb.putResto({ id: 2 });
        favoriteRestoIdb.putResto({ id: 3 });

        await favoriteRestoIdb.deleteResto(1);

        expect(await favoriteRestoIdb.getAllResto()).toEqual([{ id: 2 }, { id: 3 }]);
    });

    it('should handle request to remove a resto even though the resto has not been added', async () => {
        favoriteRestoIdb.putResto({ id: 1 });
        favoriteRestoIdb.putResto({ id: 2 });
        favoriteRestoIdb.putResto({ id: 3 });

        await favoriteRestoIdb.deleteResto(4);

        expect(await favoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });
};

export { itActAsFavoriteRestoModel };
