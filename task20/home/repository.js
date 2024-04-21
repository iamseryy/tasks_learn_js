const lsProductsKey = 'products';
let products = new Map()


function addReview(product, review) {
    products = findAllProducts()
    let reviews = products.get(product)

    if(reviews) {
        reviews.push(review)
    } else {
        reviews = [review]
    }

    products.set(product, reviews)
    localStorage.setItem(lsProductsKey, JSON.stringify([...products.entries()]))
}

function deleteReview(product, review) {
    products = findAllProducts()
    const reviews = products.get(product)
    reviews.splice(reviews.indexOf(review), 1)

    if(reviews.length === 0) {
        products.delete(product)
    } else {
        products.set(product, reviews)
    }

    localStorage.setItem(lsProductsKey, JSON.stringify([...products.entries()]))
}

function findReviewsByProduct(product) {
    return findAllProducts().get(product)
}

function findAllProducts() {
    const products = new Map()
    const productsArr = JSON.parse(localStorage.getItem(lsProductsKey))

    if (productsArr){
        productsArr.map(product => products.set(product[0], product[1]))
    }

    return products
}


export { findAllProducts, addReview, deleteReview, findReviewsByProduct }