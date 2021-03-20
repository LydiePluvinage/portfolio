// APPLY ANIMATIONS ON SCROLL
document.addEventListener('scroll', () => {
    // Selector visibility
    if (window.pageYOffset > window.innerHeight) {
        document.getElementById('selector').style.display = 'flex';
    } else {
        document.getElementById('selector').style.display = 'none';
    }
});

// SWITCH DARK/LIGHT MODE
function switchColors() {
    const element = document.body;
    element.classList.toggle('dark');
}

// ACTIVATE SWITCH WHEN USER CHANGES MODE
document.getElementById('selectorMode').addEventListener('change', switchColors);

// DECLARE OBSERVER FOR ANIMATIONS
const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px',
};

const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.target.id === 'summaryList') {
            if (!entry.target.querySelector('.summary_item.animate')) {
                entry.target
                    .querySelectorAll('.summary__item')
                    .forEach((item) => item.classList.add('animate'));
            }
            return;
        }

        if (entry.target.className === 'skills__content') {
            const areas = entry.target.getElementsByClassName('skills__area');
            for (let i = 0; i < areas.length; i += 1) {
                const widthAnimation = areas[i].getAttribute('data-width');
                areas[i].animate({ width: widthAnimation }, { duration: 1000, fill: 'forwards' });
            }
        }
    });
}, options);

// Start observing an element
const skillList = document.querySelector('.skills__content');
io.observe(skillList);

const summaryList = document.getElementById('summaryList');
io.observe(summaryList);
