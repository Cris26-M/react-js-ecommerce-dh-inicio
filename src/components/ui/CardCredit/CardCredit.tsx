import React, { useState } from 'react'
import styles from './CardCredit.module.css'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { toast } from 'sonner'
import useCartContext from '../../../hooks/useCartContext'
import { CartActionTypes } from '../../../context/cartReducer'
import { CartProduct } from '../../../interface'

export const CardCredit = () => {

    const { dispatch } = useCartContext()

    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiration: '',
        cvc: '',
        focus: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            [e.target.name]: e.target.value
        })
    }

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            focus: e.target.name
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { number, name, expiration, cvc } = cardData
        if ([number, name, expiration, cvc].includes('')) {
            toast.error('Please fill in all fields')
            return
        }

        setCardData({
            number: '',
            name: '',
            expiration: '',
            cvc: '',
            focus: ''
        })

        dispatch({ type: CartActionTypes.CLEAR_CART, payload: {} as CartProduct })
        toast.success('Payment successful')
    }

    return (
        <div className={styles.container}>
            <div>
                <Cards
                    number={cardData.number}
                    name={cardData.name}
                    expiry={cardData.expiration}
                    cvc={cardData.cvc}
                    focused={cardData.focus as any}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.formControl}>
                    <label htmlFor="number">Card Number</label>
                    <input type="text" name='number' id='number' value={cardData.number}
                        onChange={handleInputChange} onFocus={handleInputFocus} />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="name">Card Name</label>
                    <input type="text" name='name' id='name' value={cardData.name}
                        onChange={handleInputChange} onFocus={handleInputFocus} />
                </div>

                <div className={styles.formInputGrup}>
                    <div className={styles.formControl}>
                        <label htmlFor="expiration">Expiration Date</label>
                        <input type="text" name='expiration' id='expiration' value={cardData.expiration}
                            onChange={handleInputChange} onFocus={handleInputFocus} />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="cvc">Card CVC</label>
                        <input type="text" name='cvc' id='cvc' value={cardData.cvc}
                            onChange={handleInputChange} onFocus={handleInputFocus} />
                    </div>
                </div>
                <button type='submit' className={styles.buyButton}>Buy Now</button>

            </form>
        </div>
    )
}
