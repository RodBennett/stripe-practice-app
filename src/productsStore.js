// coffee id: price_1MGAsOEJEfOFWmtksw3tVhXX

// sunglasses: price_1MGAtoEJEfOFWmtkmudgvBD0

// camera: price_1MGAuSEJEfOFWmtkVQfhKMlZ

const productsArray = [
    {
        id: "price_1MGAsOEJEfOFWmtksw3tVhXX",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1MGAtoEJEfOFWmtkmudgvBD0",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1MGAuSEJEfOFWmtkVQfhKMlZ",
        title: "Camera",
        price: 49.99
    }
]

function getProductData(id) {
    // this line allows us to find a product by id in the productsArray
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined
    }
    return productData;
}

export { productsArray, getProductData };