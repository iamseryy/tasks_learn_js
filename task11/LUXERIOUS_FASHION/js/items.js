const films = JSON.parse(data)

const filmsBoxEl = document.querySelector('.cards-box')
const filmsListEl = document.createElement('ul')

filmsListEl.classList.add('cards')
filmsBoxEl.appendChild(filmsListEl)

films.forEach(film => {
    const filmEl = document.createElement('li')
    const filmImgEl = document.createElement('img')
    const filmInfoEl = document.createElement('div')
    const filmTitleEl = document.createElement('h2')
    const filmGenresEl = document.createElement('p')
    const filmYearEl = document.createElement('p')
    const filmCountryEl = document.createElement('p')
    const filmLength = document.createElement('p')
    const filmDescEl = document.createElement('p')

    filmEl.classList.add('cards__card')
    filmInfoEl.classList.add('card__info')
    filmTitleEl.classList.add('card__title')
    filmGenresEl.classList.add('card__attr')
    filmYearEl.classList.add('card__attr')
    filmCountryEl.classList.add('card__attr')
    filmLength.classList.add('card__attr')
    filmDescEl.classList.add('card__desc')

    filmImgEl.src = film.posterUrlPreview
    filmImgEl.alt = 'poster'
    filmTitleEl.textContent = film.name
    filmGenresEl.textContent = film.genres.map(it => it.genre).join(', ')
    filmYearEl.textContent = film.year
    filmCountryEl.textContent = film.countries.map(it => it.country).join(', ')
    filmLength.textContent = film.filmLength
    filmDescEl.textContent = film.description

    filmEl.appendChild(filmImgEl)
    filmInfoEl.appendChild(filmTitleEl)
    filmInfoEl.appendChild(filmGenresEl)
    filmInfoEl.appendChild(filmYearEl)
    filmInfoEl.appendChild(filmCountryEl)
    filmInfoEl.appendChild(filmLength)
    filmInfoEl.appendChild(filmDescEl)
    filmEl.appendChild(filmInfoEl)
    filmsListEl.appendChild(filmEl)
})