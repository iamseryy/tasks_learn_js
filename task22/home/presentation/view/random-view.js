import {
    getRandomPhoto,
    onLike
} from '../view-model/random-view-model.js'

import { renderFavoriteSection } from './favorite-view.js'



function getRandomImgSection() {
    return `
        <section class="random-section center">
            <div class="img-box">
                <img src="./presentation/img/blank.png" alt="blank" class="img-box__img">
            </div>
            <p class="author"></p>
            <div class="buttons">
                <div class="buttons__button next">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
                <div class="buttons__button like">
                    <i class="fa-regular fa-thumbs-up like-count"></i>
                </div>
                <div class="buttons__button favorite-list">
                    <i class="fa-solid fa-list"></i>
                </div>
            </div>
        </section>
    `
}

function setRandomContent(photo, randomImgEl, authorEl, likeCountEl) {
    randomImgEl.src = photo.url
    randomImgEl.alt = photo.author
    authorEl.textContent = photo.author
    likeCountEl.textContent = ` ${photo.likeCount}`
}

async function renderRandomImgSection(mainEl) {
    mainEl.insertAdjacentHTML('beforeend', getRandomImgSection())

    const buttonNextEl = document.querySelector('.next')
    const randomImgEl = document.querySelector('.img-box__img')
    const authorEl = document.querySelector('.author')
    const likeCountEl = document.querySelector('.like-count')
    const favoriteListEl = document.querySelector('.favorite-list')

    let photo = null

    try {
        photo = await getRandomPhoto()
        setRandomContent(photo, randomImgEl, authorEl, likeCountEl)
    } catch (e) {
        alert(e.stack)
    }

    buttonNextEl.addEventListener('click', async () => {
        try {
            photo = await getRandomPhoto()
            setRandomContent(photo, randomImgEl, authorEl, likeCountEl)
        } catch (e) {
            alert(e.stack)
        }

    })

    likeCountEl.addEventListener('click', () => {
        try {
            photo = onLike(photo)
            setRandomContent(photo, randomImgEl, authorEl, likeCountEl)
        } catch (e) {
            alert(e.stack)
        }

    })

    favoriteListEl.addEventListener('click', () => {
        mainEl.innerHTML = ''
        renderFavoriteSection(mainEl)
    })
}


export {
    renderRandomImgSection
}
