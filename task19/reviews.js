import { findAllProducts, deleteReview, findReviewsByProduct } from './repository.js'


function renderProducts() {
    products.forEach((reviews, product, map) => {
        const productEl = document.createElement('li')
        const showButtonEl = document.createElement('button')
        const reviewsEl = document.createElement('ul')

        productEl.classList.add('product-item')
        showButtonEl.classList.add('show-button')

        productEl.textContent = product
        showButtonEl.textContent = 'Show'

        productEl.appendChild(showButtonEl)
        productEl.appendChild(reviewsEl)
        productsEl.insertAdjacentHTML('beforeend', '<ul class="reviews"></ul>')
        productsEl.appendChild(productEl)

        showButtonEventListener(showButtonEl, product, productEl, reviewsEl)
    })
}

function showButtonEventListener(showButtonEl, product, productEl, reviewsEl) {
    showButtonEl.addEventListener('click', event => {
        products = findAllProducts()

        renderReviews(product, productEl, products.get(product), reviewsEl)

        showButtonEl.textContent = showButtonEl.textContent === 'Show' ? 'Hide' : 'Show'

        if(showButtonEl.textContent === 'Show') reviewsEl.innerHTML = ''

        event.preventDefault()
    })
}


function renderReviews(product, productEl, reviews, reviewsEl){
    reviews.forEach(review => {
        const reviewEl = document.createElement('li')
        const deleteButtonEl = document.createElement('button')

        reviewEl.classList.add('review-item')
        deleteButtonEl.classList.add('delete-button')

        reviewEl.textContent = '- ' + review
        deleteButtonEl.textContent = 'Delete'
        reviewEl.appendChild(deleteButtonEl)
        reviewsEl.appendChild(reviewEl)

        deleteButtonEl.addEventListener("click", () => {
            deleteReview(product, review)
            products = findAllProducts()
            if(products.get(product)){
                reviewsEl.innerHTML = ''
                renderReviews(product, productEl, products.get(product), reviewsEl)
            } else {
                productEl.remove()
            }
        })
    })
}


let products = findAllProducts()
const productsEl = document.querySelector('.products')

renderProducts()





