// APPLY ANIMATIONS ON SCROLL
document.addEventListener('scroll', () => {
    const screenHeight = window.innerHeight;
    const top = window.pageYOffset + screenHeight;

    // Selector visibility
    if (window.pageYOffset > screenHeight) {
        document.getElementById('selector').style.display = 'flex';
    } else {
        document.getElementById('selector').style.display = 'none';
    }
    // Skills animation
    const skillList = document.querySelector('.skills__content');
    const isSkillVisible = top > skillList.offsetTop;
    if (isSkillVisible) {
        const areas = document.getElementsByClassName('skills__area');
        for (let i = 0; i < areas.length; i += 1) {
            const widthAnimation = areas[i].getAttribute('data-width');
            areas[i].animate({ width: widthAnimation }, { duration: 2000, fill: 'forwards' });
        }
    }
    // Summary animation
    const summaryList = document.querySelector('.summary > .summary__content > ul');
    const isSummaryVisible = top > summaryList.offsetTop;

    if (isSummaryVisible) {
        if (!document.querySelector('.summary > .summary__content > ul > li .animate')) {
            for (let i = 0; i < summaryList.children.length; i += 1) {
                summaryList.children[i].classList.add('animate');
            }
        }
    }
});

// APPLY COLORS IN PARAMETERS
function switchColors() {
    // Body
    let element = document.body;
    element.classList.toggle('dark');

    // First quote
    element = document.querySelector('.quote > .quote__text.quote__style');
    element.classList.toggle('dark');
    element = element.querySelector('.quote__author');
    element.classList.toggle('dark');

    // Button in introduction section
    element = document.querySelector('.introduction__button > .btn');
    element.classList.toggle('dark');

    // H3 titles
    document.querySelectorAll('h3').forEach((icon) => {
        icon.classList.toggle('dark');
    });

    // Summary icons
    document.querySelectorAll('.summary__icon').forEach((icon) => {
        icon.classList.toggle('dark');
    });
}

// DEFINE COLORS DARK/LIGHT
document.getElementById('selectorMode').addEventListener('change', () => {
    switchColors();
});
