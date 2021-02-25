import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar, Cart } from './components'
import { queryByAltText } from '@testing-library/react'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data)
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };

    const handleAddToCart = async (productId, qty) => {
        const item = await commerce.cart.add(productId, qty)

        setCart(item.cart)
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
       
    }, [])

    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            <Cart cart={cart} />
            {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
        </div>
    )
}

export default App