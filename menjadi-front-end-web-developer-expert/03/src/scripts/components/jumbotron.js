class jumbotronContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="hero">
                <div class="lazyload hero-image">
                    <div class="img-overlay"></div>
                </div>
                <div class="container">
                    <div class="hero-description">
                        <h1 tabindex="0">
                            Dapatkan Rekomendasi
                            <span class="hero-description-bold">Rasa Terbaikmu</span>
                        </h1>
                        <p tabindex="0">
                            Ngapain pusing mau makan doang, cari tempat makan yang enak nggak
                            pernah semudah ini.
                        </p>
                        <span class="btn-hero-section">
                            <a tabindex="0" class="btn-hero" href="#main-content">
                                <i class="fa-solid fa-check"></i> Lihat Rekomendasi
                            </a>
                        </span>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('jumbotron-content', jumbotronContent);
