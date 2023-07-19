Feature('Add New Review');

Before(({ I }) => {
    I.amOnPage('/');
});

// create add review test
Scenario('Add new review to first restaurant', ({ I }) => {
    I.seeElement('.card-name');
    I.click(locate('.card-name a').first());
    I.seeElement('.customer-reviews');
    I.fillField('nama', 'Hasan Suryaman');
    I.fillField('content', 'Mencoba e2e testing oleh Hasan Suryaman');
    I.click('.submit-btn');
    I.see('Hasan Suryaman', '.review-name');
    I.see('Mencoba e2e testing oleh Hasan Suryaman', '.review-body');
});
