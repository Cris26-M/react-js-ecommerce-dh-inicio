import { Product } from "../interface"

export const getProducts = async (page = 0): Promise<Product[]> => {
    try {
        //if working in local vs code, change this to the real localhost route of the server
        const url = new URL('https://6699e3349ba098ed61fda26c.mockapi.io/Products')
        url.searchParams.append('page', '' + page);
        url.searchParams.append('limit', '24');
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Fail to fetch data')
        }

    } catch (error) {
        throw new Error('Network error')
    }
}