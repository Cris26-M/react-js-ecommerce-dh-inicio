import { Product } from "../interface"

export const getProducts = async ():Promise<Product[]> => {
    try {
        //if working in local vs code, change this to the real localhost route of the server
        const response = await fetch('https://6699e3349ba098ed61fda26c.mockapi.io/Products')
        if (response.ok){
            const data = await response.json()            
            return data
        } else {
            throw new Error('Fail to fetch data')
        }

    } catch (error) {
throw new Error('Network error')
    }
}