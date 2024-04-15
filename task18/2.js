"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function renderGoods() {
  goods.forEach(product => {
    const productEl = document.createElement('li')
    const productTitleEl = document.createElement('h2')
    const reviewListEl = document.createElement('ul')
    const reviewsTitleEl = document.createElement('h3')
    const formEl = document.createElement('form')
    const formLabelEl = document.createElement('label')
    const formInputBoxEl = document.createElement('div')
    const inputEl = document.createElement('input')
    const buttonEl = document.createElement('button')
    const errorEl = document.createElement('p')

    productEl.classList.add('product')
    productTitleEl.classList.add('product__title')
    reviewListEl.classList.add('reviews')
    reviewsTitleEl.classList.add('reviews__title')
    formLabelEl.classList.add('reviews__label')
    inputEl.classList.add('reviews__input')
    buttonEl.classList.add('reviews__button')
    errorEl.classList.add('reviews__error')

    productTitleEl.textContent = product.product
    reviewsTitleEl.textContent = 'Reviews'
    formLabelEl.textContent = 'Your review (10 to 500 characters)'
    inputEl.placeholder = 'Enter your review'
    buttonEl.textContent = 'SEND'


    if(findInvalidReviewsByProduct(product).length !== 0) {
      errorEl.textContent = 'Your review must be between 10 and 500 characters.'
      goods[goods.indexOf(product)].reviews.pop()
    } else {
      errorEl.textContent = ''
    }

    product.reviews.forEach(review => {
      const reviewItemEl = document.createElement('li')
      const reviewDescEl = document.createElement('p')

      reviewDescEl.textContent = '- ' + review.text
      reviewItemEl.appendChild(reviewDescEl)
      reviewListEl.appendChild(reviewItemEl)
    })

    formInputBoxEl.appendChild(inputEl)
    formInputBoxEl.appendChild(buttonEl)
    formInputBoxEl.appendChild(errorEl)

    formEl.appendChild(formLabelEl)
    formEl.appendChild(formInputBoxEl)

    productEl.appendChild(productTitleEl)
    productEl.appendChild(reviewsTitleEl)
    productEl.appendChild(reviewListEl)
    productEl.appendChild(formEl)

    reviewsEl.appendChild(productEl)

    buttonEl.addEventListener('click', () => {
      const productReviews = product.reviews
      productReviews.push({id: uid(), text: inputEl.value})
      goods[product] = {id: product.id, product: product.product, reviews: productReviews}
      event.preventDefault()
      document.querySelector('.goods').innerHTML = ''
      renderGoods()
    })
  })
}

function findInvalidReviewsByProduct(product) {
  return goods[goods.indexOf(product)].reviews.filter(review => review.text.length < 10 || review.text.length > 500)
}



const goods = [...initialData]
const reviewsEl = document.querySelector('.goods')
renderGoods()

