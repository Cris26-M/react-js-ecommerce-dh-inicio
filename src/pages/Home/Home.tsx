import { useState } from 'react'
import { Hero } from '../../components/ui/Hero/Hero'
import styles from './Home.module.css'
import { CardProduct } from '../../components/ui/CardProduct'
import { getProducts } from '../../service/index'
import { Toaster } from 'sonner'
import { useQuery } from 'react-query'

export const Home = () => {

    const [page, setPage] = useState(1)

    const { data, isLoading, error } = useQuery(['products', page], () => getProducts(page), { keepPreviousData: true })

    return (
        <>

            <Hero />
            <Toaster richColors />
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong...</p>}
            <div className={styles.container}>
                {data?.map((product) =>
                    (<CardProduct key={product.tail} product={product}></CardProduct>)
                )}
            </div>
            <div className={styles.paginationContainer}>
                <button className={styles.paginationButton} onClick={() => setPage(page - 1)} disabled={page === 1}>previous page</button>
                <div className={styles.paginationActive}>
                    <span>{page}</span>
                </div>
                <button className={styles.paginationButton} onClick={() => setPage(page + 1)} >next page</button>
            </div>
        </>
    )
}
