import drawerInitiator from '../utils/drawer-initiator';
import urlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        drawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });
    }

    async renderPage() {
        const url = urlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipContent = document.querySelector('.skip-to-content');
        skipContent.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#main-content').focus();
        });
    }

    showHeroBaseOnUrl() {
        const hero = document.querySelector('.hero');
        const mcontent = document.querySelector('#main-content');
        const getUrl = urlParser.parseActiveUrlWithCombiner();
        !(getUrl === '/' || getUrl === '/home')
            ? (hero.style.display = 'none', mcontent.style.padding = '80px 0 0 0')
            : (hero.style.display = 'block', mcontent.style.padding = '0');
    }

    // scrolltoTop() {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // }
}

export default App;
