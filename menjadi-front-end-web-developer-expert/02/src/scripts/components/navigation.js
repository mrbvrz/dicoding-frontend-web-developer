class navigationContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <header class="header">
                <div class="nav-inner">
                    <h1 class="nav-title"><span class="nav-title-bold">Taste</span>Lab</h1>
                </div>
                <button class="mobile-menu"><i class="menu-icon fa-solid fa-bars"></i></button>
                <nav class="nav">
                    <ul class="nav-list">
                        <li class="nav-item"><a href="#">Home</a></li>
                        <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                        <li class="nav-item"><a class="last" href="https://www.linkedin.com/in/mrbvrz/">About Us</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('navigation-content', navigationContent);
