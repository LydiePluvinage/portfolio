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
        const areas = skillList.getElementsByClassName('skills__area');
        for (let i = 0; i < areas.length; i += 1) {
            const widthAnimation = areas[i].getAttribute('data-width');
            areas[i].animate({ width: widthAnimation }, { duration: 2000, fill: 'forwards' });
        }
    }
    // Summary animation
    const summaryList = document.getElementById('summaryList');
    const isSummaryVisible = top > summaryList.offsetTop;

    if (isSummaryVisible) {
        if (!summaryList.querySelector('.summary_item.animate')) {
            summaryList
                .querySelectorAll('.summary__item')
                .forEach((item) => item.classList.add('animate'));
        }
    }
});

// SWITCH DARK/LIGHT MODE
function switchColors() {
    const element = document.body;
    element.classList.toggle('dark');
}

// ACTIVATE SWITCH WHEN USER CHANGES MODE
document.getElementById('selectorMode').addEventListener('change', switchColors);
