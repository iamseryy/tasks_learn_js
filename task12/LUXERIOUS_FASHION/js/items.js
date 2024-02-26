function buildFeaturedItems(featuredItems) {
    const cartItems = []
    const itemsSectionEl = document.querySelector('.main_items_section')
    const itemsListEl = document.createElement('ul')

    itemsListEl.classList.add('main_items')
    itemsSectionEl.insertBefore(itemsListEl, document.querySelector('.main_button'))

    featuredItems.forEach(item => {
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
            cartItems.push(item)
            buildCartItems(cartItems)
        })
    })
}

function buildCartItems(cartItems) {
    const cartItemsBoxEl = document.querySelector('.cart-content__cart')
    const cartItemsListEl = document.createElement('ul')

    cartItemsListEl.classList.add('cart-content__list')
    cartItemsBoxEl.appendChild(cartItemsListEl)

    cartItems.forEach(item => {
        const itemEl = document.createElement('li')
        const productLinkEl= document.createElement('a')
        const itemImgEl = document.createElement('img')
        const itemInfoBoxEL = document.createElement('div')


        itemEl.classList.add('cart-content__item')
        productLinkEl.classList.add('cart-content__item-link')
        itemImgEl.classList.add('cart-content__img')
        itemInfoBoxEL.classList.add('cart-content__dsc')

        productLinkEl.href = "#"
        itemImgEl.src = item.image
        itemImgEl.alt = item.name


        productLinkEl.appendChild(itemImgEl)
        itemEl.appendChild(productLinkEl)
        itemEl.appendChild(itemInfoBoxEL)
        cartItemsListEl.appendChild(itemEl)



    })

}

buildFeaturedItems(JSON.parse(data))

