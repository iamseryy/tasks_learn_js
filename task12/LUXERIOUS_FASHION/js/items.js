function buildFeaturedItems(featuredItems) {
    const cartItems = new Map()
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
        const cartEl= document.createElement('button')
        const cartImgEl = document.createElement('img')
        const cartCommandNamedEl = document.createElement('p')

        itemEl.classList.add('main_items_item')
        itemImgEl.classList.add('main_items_item_img')
        itemInfoBoxEL.classList.add('main_items_item_info')
        itemTitleEl.classList.add('main_items_item_info_title')
        itemPriceEl.classList.add('main_items_item_info_price')
        cartBoxEl.classList.add('main_items_item_add')
        cartEl.classList.add('main_items_item_add_link')
        cartImgEl.classList.add('main_items_item_add_link_img')
        cartCommandNamedEl.classList.add('main_items_item_add_link_txt')

        productLinkEl.href = '#'
        itemImgEl.src = item.image
        itemImgEl.alt = item.name
        itemTitleEl.textContent = item.name
        itemPriceEl.textContent = item.price + ' ' + item.currency
        cartImgEl.src = 'img/cart-add.svg'
        cartImgEl.alt = 'cart'
        cartCommandNamedEl.textContent = 'Add to Cart'

        itemInfoBoxEL.appendChild(itemTitleEl)
        itemInfoBoxEL.appendChild(itemPriceEl)
        cartEl.appendChild(cartImgEl)
        cartEl.appendChild(cartCommandNamedEl)
        productLinkEl.appendChild(itemImgEl)
        productLinkEl.appendChild(itemInfoBoxEL)
        cartBoxEl.appendChild(cartEl)
        itemEl.appendChild(productLinkEl)
        itemEl.appendChild(cartBoxEl)
        itemsListEl.appendChild(itemEl)

        cartBoxEl.addEventListener('click', event => {
            cartItems.set(item, cartItems.has(item) ? cartItems.get(item) + 1 : 1)
            const cartItemsBoxEl = document.querySelector('.cart-box')
            if (cartItemsBoxEl) cartItemsBoxEl.innerHTML = ''
            buildCartItems(cartItems)
        })
    })
}

function buildCartItems(cartItems) {
    const cartItemsBoxEl = document.querySelector('.cart-box')
    const cartItemsTitleEl = document.createElement('h1')
    const cartItemsListEl = document.createElement('ul')

    cartItemsTitleEl.classList.add('cart-box__title')
    cartItemsListEl.classList.add('cart-content__list')

    cartItemsTitleEl.textContent = 'Cart Items'

    cartItemsBoxEl.appendChild(cartItemsTitleEl)
    cartItemsBoxEl.appendChild(cartItemsListEl)

    cartItems.forEach((amount, item) => {
        const itemEl = document.createElement('li')
        const productLinkEl= document.createElement('a')
        const itemImgEl = document.createElement('img')
        const itemInfoBoxEL = document.createElement('div')
        const itemTitleEl = document.createElement('h2')
        const itemsParamsEl = document.createElement('ul')
        const itemPriceEl = document.createElement('li')
        const itemLabelPriceEl = document.createElement('p')
        const itemValuePriceEl = document.createElement('span')
        const itemColorEl = document.createElement('li')
        const itemLabelColorEl = document.createElement('p')
        const itemValueColorEl = document.createElement('span')
        const itemSizeEl = document.createElement('li')
        const itemLabelSizeEl = document.createElement('p')
        const itemValueSizeEl = document.createElement('span')
        const itemQuantityEl = document.createElement('li')
        const itemLabelQuantityEl = document.createElement('p')
        const itemValueQuantityEl = document.createElement('input')
        const itemDeleteEl = document.createElement('button')
        const itemDeleteSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        const itemDeletePathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        itemEl.classList.add('cart-content__item')
        productLinkEl.classList.add('cart-content__item-link')
        itemImgEl.classList.add('cart-content__img')
        itemInfoBoxEL.classList.add('cart-content__dsc')
        itemTitleEl.classList.add('cart-content__title')
        itemsParamsEl.classList.add('cart-content__params')
        itemLabelPriceEl.classList.add('cart-content__param')
        itemLabelColorEl.classList.add('cart-content__param')
        itemLabelSizeEl.classList.add('cart-content__param')
        itemLabelQuantityEl.classList.add('cart-content__param')
        itemValuePriceEl.classList.add('cart-content__param_red')
        itemValueColorEl.classList.add('cart-content__param_grey')
        itemValueSizeEl.classList.add('cart-content__param_grey')
        itemValueQuantityEl.classList.add('cart-content__input')
        itemDeleteEl.classList.add('cart-content__del')

        productLinkEl.href = "#"
        itemImgEl.src = item.image
        itemImgEl.alt = item.name
        itemTitleEl.textContent = (item.brand + ' ' + item.name).toUpperCase()
        itemLabelPriceEl.textContent = 'Price:'
        itemLabelColorEl.textContent = 'Color:'
        itemLabelSizeEl.textContent = 'Size:'
        itemLabelQuantityEl.textContent = 'Quantity:'
        itemValuePriceEl.textContent = ' ' + item.currency + item.price
        itemValueColorEl.textContent = ' ' + item.color
        itemValueSizeEl.textContent = ' ' + item.size
        itemValueQuantityEl.type = 'number'
        itemValueQuantityEl.min = '1'
        itemValueQuantityEl.value = amount
        itemDeleteSvgEl.setAttribute('fill', 'none');
        itemDeleteSvgEl.setAttribute('viewBox', '0 0 18 18');
        itemDeleteSvgEl.setAttribute('width', '18');
        itemDeleteSvgEl.setAttribute('height', '18');
        itemDeletePathEl.setAttribute('d', 'M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z')
        itemDeletePathEl.setAttribute('fill', '#575757')

        productLinkEl.appendChild(itemImgEl)
        itemLabelPriceEl.appendChild(itemValuePriceEl)
        itemLabelColorEl.appendChild(itemValueColorEl)
        itemLabelSizeEl.appendChild(itemValueSizeEl)
        itemLabelQuantityEl.appendChild(itemValueQuantityEl)
        itemPriceEl.appendChild(itemLabelPriceEl)
        itemColorEl.appendChild(itemLabelColorEl)
        itemSizeEl.appendChild(itemLabelSizeEl)
        itemQuantityEl.appendChild(itemLabelQuantityEl)
        itemsParamsEl.appendChild(itemPriceEl)
        itemsParamsEl.appendChild(itemColorEl)
        itemsParamsEl.appendChild(itemSizeEl)
        itemsParamsEl.appendChild(itemQuantityEl)
        itemInfoBoxEL.appendChild(itemTitleEl)
        itemInfoBoxEL.appendChild(itemsParamsEl)
        itemDeleteSvgEl.appendChild(itemDeletePathEl)
        itemDeleteEl.appendChild(itemDeleteSvgEl)
        itemEl.appendChild(productLinkEl)
        itemEl.appendChild(itemInfoBoxEL)
        itemEl.appendChild(itemDeleteEl)
        cartItemsListEl.appendChild(itemEl)

        itemDeleteEl.addEventListener('click', event => {
            cartItems.delete(item)
            if (cartItems.size === 0) document.querySelector('.cart-box').innerHTML = ''
            itemEl.remove()
        })
    })
}

buildFeaturedItems(JSON.parse(data))
