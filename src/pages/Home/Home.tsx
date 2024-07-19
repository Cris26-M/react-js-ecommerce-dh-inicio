import React, { useEffect, useState } from 'react'
import { Hero } from '../../components/ui/Hero/Hero'
import styles from './Home.module.css'
import { CardProduct } from '../../components/ui/CardProduct'
import { getProducts } from '../../service/index'
import { Product } from '../../interface'

export const Home = () => {
    const [products, setProducts] = useState<Product[]>([])

    const [error, setError] = useState(false)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data)
            setIsLoading(false)
        }).catch(() => {
            setError(true)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])

    return (
        <>

            <Hero />
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong...</p>}
            <div className={styles.container}>
                {products.map((product) =>
                    (<CardProduct key={product.tail} product={product}></CardProduct>)
                )}
            </div>
        </>
    )
}
