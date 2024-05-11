import {
    filmsJson
} from './films-json.js'

const films = JSON.parse(filmsJson)
let indexImageSlider = 0

function getImageSlider() {
    return {
        id: indexImageSlider,
        posterUrl: films[indexImageSlider].posterUrl,
        name: films[indexImageSlider].name
    }
}

function getFirstImageSlider() {
    return getImageSlider()
}

function getNextImageSlider() {
    indexImageSlider = films.length - 1 > indexImageSlider ? ++indexImageSlider : 0
    return getImageSlider()
}

function getPreviousImageSlider() {
    indexImageSlider = indexImageSlider === 0 ? films.length - 1 : --indexImageSlider
    return getImageSlider()
}

function getNumberImages() {
    return films.length
}

function getImageSliderById(id) {
    indexImageSlider = id
    return getImageSlider()
}

export {
    getFirstImageSlider,
    getNextImageSlider,
    getPreviousImageSlider,
    getImageSliderById,
    getNumberImages
}

