// const linkToKatalog = document.getElementById('link-to-katalog');
// const katalog = document.getElementById('katalog');
// const linkToFooter = document.getElementById('link-to-footer');
// const footer = document.getElementById('footer');

const link = document.getElementById('to-range');
const range = document.getElementById('range');

function scroll(el){
    el.scrollIntoView({
        behavior: 'smooth'
    });
}

link.addEventListener('click', () => scroll(range));

// linkToKatalog.addEventListener('click', () => scroll(katalog));
// linkToFooter.addEventListener('click', () => scroll(footer));
