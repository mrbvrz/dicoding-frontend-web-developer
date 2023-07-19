const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('.empty-container');
    I.see('Kamu belum menambahkan restoran yang disukai...', '.empty-text');
});

Scenario('like and unlike for first restaurant', async ({ I }) => {
    I.see('Kamu belum menambahkan restoran yang disukai...', '.empty-text');
    I.amOnPage('/');

    // like 1st resto
    I.wait(2);
    I.seeElement('.card-name');
    I.click(locate('.card-name a').first());
    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.seeElement('.card-item');

    const firstRestoTitle = await I.grabTextFrom(locate('.card-name a').first());
    const likedRestoTitle = await I.grabTextFrom('.card-name a');
    assert.strictEqual(likedRestoTitle, firstRestoTitle);

    I.wait(2);
    I.click(locate('.card-name a').first());
    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.seeElement('.empty-container');
    I.see('Kamu belum menambahkan restoran yang disukai...', '.empty-text');
});
