import 'regenerator-runtime';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import CONFIG from './globals/config';
import { webSocketInitiator } from './utils/web-socket-initiator';

import './components/navigation';
import './components/jumbotron';
import './components/footer';

const app = new App({
    button: document.querySelector('.mobile-menu'),
    drawer: document.querySelector('.nav'),
    content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
    app.showHeroBaseOnUrl();
});

window.addEventListener('load', () => {
    app.renderPage();
    app.showHeroBaseOnUrl();
    swRegister();
    webSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
