import CONFIG from '../../globals/config';


// data card
const createTemplateResto = (create) => `
    <div tabindex="0" class="card-item">
        <img tabindex="0"
        class="lazyload blur-up card-image"
        data-source="auto"
        data-src="${CONFIG.BASE_IMAGE_URL}small/${create.pictureId}"
        alt="${create.name}"
        title="${create.name}"
        data-srcset="${CONFIG.BASE_IMAGE_URL}small/${create.pictureId} 300w,
        ${CONFIG.BASE_IMAGE_URL}small/${create.pictureId} 600w,
        ${CONFIG.BASE_IMAGE_URL}small/${create.pictureId} 900w">
        <span tabindex="-1" class="card-item-rating"><i class="fa-solid fa-star"></i> ${create.rating}</span>
        <div class="card-info">
            <h2 tabindex="0" class="card-name"><a tabindex="0" href="${`/#/detail/${create.id}`}">${create.name}</a></h2>
            <h3 tabindex="0" class="card-area"><i class="small-icon fa-solid fa-location-dot"></i> ${create.city}</h3>
            <h3 tabindex="0" class="card-description">${create.description}</h3>
        </div>
    </div>
`;


// detail
const createTemplateDetailResto = (create) => `
<div>
    <h2 tabindex="0" class="content-section-label detail-title">${create.name}</h2>
    <div class="restaurant-profile">
        <div class="restaurant-img-container">
            <img class="lazyload blur-up img-detail"
            data-src="${CONFIG.BASE_IMAGE_URL}large/${create.pictureId}"
            alt="Restaurant ${create.name}"
            data-srcset="${CONFIG.BASE_IMAGE_URL}large/${create.pictureId} 300w,
            ${CONFIG.BASE_IMAGE_URL}large/${create.pictureId} 600w,
            ${CONFIG.BASE_IMAGE_URL}large/${create.pictureId} 900w">
        </div>
        <div class="restaurant-desc">
                <h3><i class="fa fa-map-marker fa-md desc-icon" aria-hidden="true"></i><span class="short-title" aria-label="address at ${create.address}, ${create.city}"> ${create.address}, ${create.city}</span></h3>
                <h3><i class="fa fa-list-alt fa-md desc-icon" aria-hidden="true"></i><span class="short-title" aria-label="categories"> ${create.categories.map((category) => `<span class=""> ${category.name}</span>`).join('')}</span></h3>
                <h3><i class="fa fa-star fa-md desc-icon"></i><span class="short-title" aria-label="rating"> ${create.rating}</span></h3>
            </div>
    </div>

    <div class="restaurant-detail">
        <div class="restautant-about">
            <h2>Tentang kami</h2>
            <p>${create.description}</p>
        </div>
        <div class="menu-detail">
            <h2>Menu</h2>
            <div class="row">
                <div class="food-detail">
                    <h3>Food</h3>
                    ${create.menus.foods.map((food) => `<ul><li>${food.name}</li></ul>`).join('')}
                </div>
                <div class="drink-detail">
                    <h3>Drink</h3>
                    ${create.menus.drinks.map((drink) => `<ul><li>${drink.name}</li></ul>`).join('')}
                </div>
            </div>
        </div>
        <div class="restaurant-review">
        <h2>Ulasan (${create.customerReviews.length})</h2>
        <div class="review-detail">
            ${createReviewCard(create.customerReviews)}
        </div>
        </div>
    </div>
    </div>
`;

// like button
const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
    </button>
`;

// liked button
const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
    </button>
`;

// no favorite
const createNoFavoriteTemplate = () => `
    <div class="empty-container">
        <img class="lazyload blur-up nodata"
        data-src="images/undraw_missed_chances_k-3-cq.svg"
        data-srcset="images/undraw_missed_chances_k-3-cq.svg 300w,
        images/undraw_missed_chances_k-3-cq.svg 600w,
        images/undraw_missed_chances_k-3-cq.svg 900w">
        <p class="empty-text">Kamu belum menambahkan restoran yang disukai...</p>
        <div class="tofavorite">
            <a href="#"><i class="fa-solid fa-plus"></i> Tambahkan sekarang</a>
        </div>
    </div>
`;

const createReviewCard = (data) => {
    let customerReview = '';
    data.forEach((review) => {
        customerReview += `
        <div class="detail-review-container">
            <div class="review-header">
                <p class="review-name">${review.name}</p>
                <p class="review-date">${review.date}</p>
            </div>
            <div class="review-body">
                "${review.review}"
            </div>
        </div>
        `;
    });
    return customerReview;
};

// loading animation
const loading = () => `
    <div class="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
`;

const createSkeletonTemplate = (count) => {
    let template = '';

    for (let i = 0; i < count; i += 1) {
        template += `
        <div class="card">
            <img class="lazyload blur-up card-img" alt="skeleton">
            <div class="card-content">
                <h2 class="skeleton">Lorem ipsum dolor sit.</h2>
                <p class="skeleton"></p>
                <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</div>
            </div>
        </div>
        `;
    }
    return template;
};

export {
    createTemplateResto,
    createTemplateDetailResto,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createNoFavoriteTemplate,
    createReviewCard,
    loading,
    createSkeletonTemplate,
};
