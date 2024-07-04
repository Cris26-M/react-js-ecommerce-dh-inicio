import React, { useEffect, useState } from 'react'
import { Hero } from '../../components/ui/Hero/Hero'

export const Home = () => {
    const [products, setProducts] = useState([])

    const getProducts = async() => {
        try {
            //if working in local vs code, change this to the real localhost route of the server
            const response = await fetch('https://3000-idx-react-js-ecommerce-dh-inicio-1720009870507.cluster-vyr53kd25jc2yvngldrwyq6zc4.cloudworkstations.dev/products')
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getProducts()
    }, [])

console.log(products);

    
  return (
    <>

    <Hero/>
    </>
  )
}
