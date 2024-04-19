import { addReview } from './repository.js'


const productEl = document.querySelector('.product__input')
const reviewEl = document.querySelector('.review__input')
const addBtnEl = document.querySelector('.add__button')
const ERROR = 'All fields must be completed'


addBtnEl.addEventListener('click', () => {
    if(productEl.value.length == 0 || reviewEl.value.length == 0) {
        alert(ERROR)
    } else {
        addReview(productEl.value, reviewEl.value)
    }
})

