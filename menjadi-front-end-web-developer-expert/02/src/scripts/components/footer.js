class footerContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer>
                <div class="ft">
                    <p>
                        Copyright &copy; 2023 - TasteLab by
                        <a href="https://github.com/mrbvrz">Hasan Suryaman</a>
                    </p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-content', footerContent);
