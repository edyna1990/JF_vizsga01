import React from 'react'
import { FeaturedProducts } from './FeaturedProducts'

export const Home = () => {
  return (
    <div>
        <header>
            <h1>Welcome to our Online Store</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </header>
        <main>
            <h2>Featured Products</h2>
            <FeaturedProducts/>
        </main>
        <footer>
            <p>© 2024 Our online store. All rights reserved</p>
        </footer>
    </div>
  )
}
