import {
    findAllFavoritePhotos,
    deleteFavoritePhoto
} from '../view-model/favorite-view-model.js'
import {renderRandomImgSection} from './random-view.js'


function getFavoriteSection() {
    return `
        <section class="favorite-section center">
            <h2 class="favorite-section__title">Favorite</h2>
            <ul class="favorites"></ul>
            <div class="buttons__button back">
                <i class="fa-solid fa-backward"> Back to random image</i>
            </div>
        </section>
    `
}

function getFavoriteItem(photo) {
    return `
        <li class='favorite' id='${photo.id}'>
            <div class="random-section center">
                <div class="img-box">
                    <img src="${photo.url}" alt="${photo.author}" class="img-box__img">
                </div>
                <p class="author">${photo.author}</p>
                <div class="buttons">
                    <div class="buttons__button like">
                        <i class="fa-regular fa-thumbs-up like-count"> ${photo.likeCount}</i>
                    </div>
                </div>
            </div>     
        </li>
    `
}

async function renderFavoriteSection(mainEl) {
    mainEl.insertAdjacentHTML('beforeend', getFavoriteSection())
    const favoritesEl = document.querySelector('.favorites')

    try {
        const favoritePhotos = await findAllFavoritePhotos()
        favoritePhotos.forEach(photo => {
            favoritesEl.insertAdjacentHTML('beforeend', getFavoriteItem(photo))
        })
    } catch (e) {
        alert(e.stack)
    }

    const backButton = document.querySelector('.back')
    backButton.addEventListener('click', () => {
        mainEl.innerHTML = ''
        renderRandomImgSection(mainEl)
    })

    favoritesEl.addEventListener('click', ({target}) => {
        if(target.closest('.like')) {
            deleteFavoritePhoto(target.closest('.favorite').id)
            mainEl.innerHTML = ''
            renderFavoriteSection(mainEl)
        }
    })
}


export {
    renderFavoriteSection
}