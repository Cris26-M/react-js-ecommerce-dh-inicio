import React from 'react'
import styles from './Table.module.css'
import useCartContext from '../../../hooks/useCartContext'
import { CartProduct } from '../../../interface'
import { CartActionTypes } from '../../../context/cartReducer'

export const Table = () => {
    const { state: { cartItems }, dispatch } = useCartContext()

    const removeItem = (item: CartProduct) => {
        dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: item })
    }

    const addToCart = (item: CartProduct) => {
        dispatch({ type: CartActionTypes.ADD_TO_CART, payload: item })
    }

    const totalPay = () => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
        return total
    }

  return (
    <>
    <table className={styles.modalTable}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Delete</th>
                        <th>Quantity</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td><p>{item.name}</p></td>
                            <td >
                                <button className={styles.modalButtonRemove} onClick={() => removeItem(item)}>-1</button>
                            </td>
                            <td><p>{item.quantity}</p></td>
                            <td >
                                <button className={styles.modalButtonAdd} onClick={() => addToCart(item)} >+1</button>
                            </td>
                        </tr>
                    )

                    )}

                </tbody>
            </table>
            <div className={styles.modalTotalContainer}>
                <h3>Total: ${totalPay()}</h3>
            </div>
    </>
  )
}
