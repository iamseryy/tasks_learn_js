import {
    getFirstImageSlider,
    getPreviousImageSlider,
    getNextImageSlider,
    getImageSliderById,
    getNumberImages
} from './repository.js'

function setImageSlider(imageSlider) {
    currentSliderImageEl.src = imageSlider.posterUrl
    currentSliderImageEl.alt = imageSlider.name

    const activeDotEl = document.querySelector('.active')
    if(activeDotEl) {
        activeDotEl.classList.remove('active')
    }

    document.getElementById(`${imageSlider.id}`).classList.add('active')
}

const backButtonEl = document.querySelector('.left')
const nextButtonEl = document.querySelector('.right')
const currentSliderImageEl = document.querySelector('.slider__img')
const dotsEl = document.querySelector('.dots')
const numberImages = getNumberImages()

Array.from({ length: numberImages }, (v, k) => k).forEach(index => {
    dotsEl.insertAdjacentHTML('beforeend', `<li class='dot' id='${index}'></li>`)
})

setImageSlider(getFirstImageSlider())

backButtonEl.addEventListener('click', () => {
    setImageSlider(getPreviousImageSlider())
})

nextButtonEl.addEventListener('click', () => {
    setImageSlider(getNextImageSlider())
})

dotsEl.addEventListener('click', ({target}) => {
    if(!target.closest('.dot').classList.contains('active')) {
        setImageSlider(getImageSliderById(Number(target.closest('.dot').id)))
    }
})