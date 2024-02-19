const items = JSON.parse(data)

const itemsSectionEl = document.querySelector('.main_items_section')
const itemsListEl = document.createElement('ul')

itemsListEl.classList.add('main_items')
itemsSectionEl.appendChild(itemsListEl)

items.forEach(item => {
    const itemEl = document.createElement('li')
    const productLinkEl= document.createElement('a')
    const itemImgEl = document.createElement('img')
    const itemInfoBox = document.createElement('div')
    const itemTitleEl = document.createElement('h3')
    const itemPriceEl = document.createElement('p')
    



    itemEl.classList.add('main_items_item')

    itemTitleEl.textContent = item.name


    itemEl.appendChild(itemTitleEl)
    itemsListEl.appendChild(itemEl)

    // const filmEl = document.createElement('li')
    // const filmImgEl = document.createElement('img')
    // const filmInfoEl = document.createElement('div')
    // const filmTitleEl = document.createElement('h2')
    // const filmGenresEl = document.createElement('p')
    // const filmYearEl = document.createElement('p')
    // const filmCountryEl = document.createElement('p')
    // const filmLength = document.createElement('p')
    // const filmDescEl = document.createElement('p')
    //
    // filmEl.classList.add('cards__card')
    // filmInfoEl.classList.add('card__info')
    // filmTitleEl.classList.add('card__title')
    // filmGenresEl.classList.add('card__attr')
    // filmYearEl.classList.add('card__attr')
    // filmCountryEl.classList.add('card__attr')
    // filmLength.classList.add('card__attr')
    // filmDescEl.classList.add('card__desc')
    //
    // filmImgEl.src = film.posterUrlPreview
    // filmImgEl.alt = 'poster'
    // filmTitleEl.textContent = film.name
    // filmGenresEl.textContent = film.genres.map(it => it.genre).join(', ')
    // filmYearEl.textContent = film.year
    // filmCountryEl.textContent = film.countries.map(it => it.country).join(', ')
    // filmLength.textContent = film.filmLength
    // filmDescEl.textContent = film.description
    //
    // filmEl.appendChild(filmImgEl)
    // filmInfoEl.appendChild(filmTitleEl)
    // filmInfoEl.appendChild(filmGenresEl)
    // filmInfoEl.appendChild(filmYearEl)
    // filmInfoEl.appendChild(filmCountryEl)
    // filmInfoEl.appendChild(filmLength)
    // filmInfoEl.appendChild(filmDescEl)
    // filmEl.appendChild(filmInfoEl)
    // filmsListEl.appendChild(filmEl)
})