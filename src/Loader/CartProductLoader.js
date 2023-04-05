import { getShoppingCart } from "../utilities/fakedb"

const cartProductLoader = async ()=>{
        const loadProduct = await fetch('products.json')
        const products = await loadProduct.json()
        console.log(products)

        const storedCart = getShoppingCart()
        const savedCart = []
        for(const id in storedCart){
                const addedProduct = products.find(pd=> pd.id === id)
                if(addedProduct){
                        const quantity = storedCart[id]
                        addedProduct.quantity = quantity
                        savedCart.push(addedProduct)
                }
        }
        // if i need to send to things
        // return [products, savedCart]
        // another option
        // return {products, cart: savedCart}
        return savedCart

}
export default cartProductLoader;