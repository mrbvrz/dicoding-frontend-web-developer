const drawerInitiator = {
    init({
        button, drawer, content
    }) {
        button.addEventListener('click', (event) => {
            this._openDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
    },

    _openDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('mobile-menu-transform');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('mobile-menu-transform');
    },
};

export default drawerInitiator;
