const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors){
    anchor.addEventListener('click', (event) => {
        event.preventDefault()
        const blockId = anchor.getAttribute('href')
        document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

function trackScroll(){
    let scrolled = window.pageYOffset
    let coords = document.documentElement.clientHeight
    if(scrolled > coords){
        toTopButton.classList.add('_show')
    }
    if(scrolled < coords){
        toTopButton.classList.remove('_show')
    }
}



const toTopButton = document.querySelector('.to-top')

window.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset
    if(scrolled > 600){
        toTopButton.classList.add('_show')
    }
    else{
        toTopButton.classList.remove('_show')
    }
})



