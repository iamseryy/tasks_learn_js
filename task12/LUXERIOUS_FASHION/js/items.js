const items = JSON.parse(data)
const items_cart = []

const itemsSectionEl = document.querySelector('.main_items_section')
const itemsListEl = document.createElement('ul')

itemsListEl.classList.add('main_items')
itemsSectionEl.insertBefore(itemsListEl, document.querySelector('.main_button'))

items.forEach(item => {
    const itemEl = document.createElement('li')
    const productLinkEl= document.createElement('a')
    const itemImgEl = document.createElement('img')
    const itemInfoBoxEL = document.createElement('div')
    const itemTitleEl = document.createElement('h3')
    const itemPriceEl = document.createElement('p')
    const cartBoxEl = document.createElement('div')
    // const cartLinkEl= document.createElement('a')
    const cartEl= document.createElement('div')
    const cartImgEl = document.createElement('img')
    const cartCommandNamedEl = document.createElement('p')

    itemEl.classList.add('main_items_item')
    itemImgEl.classList.add('main_items_item_img')
    itemInfoBoxEL.classList.add('main_items_item_info')
    itemTitleEl.classList.add('main_items_item_info_title')
    itemPriceEl.classList.add('main_items_item_info_price')
    cartBoxEl.classList.add('main_items_item_add')
    // cartLinkEl.classList.add('main_items_item_add_link')
    cartEl.classList.add('main_items_item_add_link')
    cartImgEl.classList.add('main_items_item_add_link_img')
    cartCommandNamedEl.classList.add('main_items_item_add_link_txt')

    productLinkEl.href = '#'
    itemImgEl.src = item.image
    itemImgEl.alt = item.name
    itemTitleEl.textContent = item.name
    itemPriceEl.textContent = item.price + ' ' + item.currency
    // cartLinkEl.href = '#'
    cartImgEl.src = 'img/cart-add.svg'
    cartImgEl.alt = 'cart'
    cartCommandNamedEl.textContent = 'Add to Cart'

    itemInfoBoxEL.appendChild(itemTitleEl)
    itemInfoBoxEL.appendChild(itemPriceEl)
    // cartLinkEl.appendChild(cartImgEl)
    // cartLinkEl.appendChild(cartCommandNamedEl)
    cartEl.appendChild(cartImgEl)
    cartEl.appendChild(cartCommandNamedEl)
    productLinkEl.appendChild(itemImgEl)
    productLinkEl.appendChild(itemInfoBoxEL)
    // cartBoxEl.appendChild(cartLinkEl)
    cartBoxEl.appendChild(cartEl)
    itemEl.appendChild(productLinkEl)
    itemEl.appendChild(cartBoxEl)
    itemsListEl.appendChild(itemEl)

    cartBoxEl.addEventListener('click', event => {
        items_cart.push(item)
    })
})

// const cartBoxEl = document.querySelector('.main_items')
// cartBoxEl.addEventListener('click', event => {
//     console.log(event)
//     if (event.target.className === 'main_items_item_add_link' ||
//         event.target.parentElement.className === 'main_items_item_add_link') console.log("test")
// })


