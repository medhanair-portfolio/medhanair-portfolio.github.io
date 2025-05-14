// chatgpt helped me write this!

function scrollDown() {
    const sections = document.querySelectorAll('.wallpaper > div');
    const currentScroll = window.scrollY;

    for (let section of sections) {
        const sectionTop = section.offsetTop;
        if (sectionTop > currentScroll) {
            document.querySelector('.wallpaper').scrollTo({ top: sectionTop, behavior: 'smooth' });
            return;
        }
    }
}







function scrollUp() {
    const entryPage = document.querySelector('.entrypage');
    if (entryPage) {
        const entryPageTop = entryPage.offsetTop;
        document.querySelector('.wallpaper').scrollTo({ top: entryPageTop, behavior: 'smooth' });
    }
}
