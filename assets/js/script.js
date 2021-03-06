var lastScrollTop = 0;
function onDown() {
    window.scrollBy({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
    document.querySelector('div.icon-down-wrapper > a').classList.add('is-hidden');
    document.querySelector('div.icon-up-wrapper > a').classList.remove('is-hidden');
};
function onUp() {
    window.scrollBy({
        top: -document.body.scrollHeight,
        behavior: 'smooth'
    });
    document.querySelector('div.icon-up-wrapper > a').classList.add('is-hidden');
    document.querySelector('div.icon-down-wrapper > a').classList.remove('is-hidden');
};
window.onscroll = function (ev) {
    if ( window.innerWidth > window.innerHeight && window.innerWidth > 2048 ) {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                onDown();
            }
        } else {
            if (document.body.scrollTop === 0) {
                onUp();
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }
};
