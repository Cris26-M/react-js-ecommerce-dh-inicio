import { Products } from "../interface"

export const getProducts = async ():Promise<Products[]> => {
    try {
        //if working in local vs code, change this to the real localhost route of the server
        const response = await fetch('https://www.amiiboapi.com/api/amiibo/')
        if (response.ok){
            const data = await response.json()
            return data.amiibo
        } else {
            throw new Error('Fail to fetch data')
        }

    } catch (error) {
throw new Error('Network error')
    }
}