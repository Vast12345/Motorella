const stickySections = [...document.querySelectorAll(".sticky")];
const mediaQuery = window.matchMedia('(max-width:510px)');

window.addEventListener("scroll", (e) => {
    for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i], mediaQuery);
    }
})

function transform(section, media) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    console.log(media)
    if (media.matches) {
        percentage = percentage < 0 ? 0 : percentage > 185 ? 185 : percentage;
    } else {
        percentage = percentage < 0 ? 0 : percentage > 95 ? 95 : percentage;
    }
    
    scrollSection.style.transform = `translate3d(-${percentage}vw, 0, 0)`
}