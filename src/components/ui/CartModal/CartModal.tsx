import React from 'react'
import styles from './CartModal.module.css'
import Close from '../../../assets/close.svg'

export const CartModal = ({handleShowCartModal}) => {
    return (
        <div className={styles.modalContainer}>
            <button className={styles.modalCloseButton}>
                <img src={Close} alt="Close" onClick={handleShowCartModal}/>
            </button>
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
                    <tr >
                        <td>name</td>
                        <td className={styles.modalButtonRemove}>
                            <button >-1</button>
                        </td>
                        <td>12</td>
                        <td className={styles.modalButtonAdd}>
                            <button >+1</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.modalTotalContainer}>
                <h3>Total: 400,00</h3>
            </div>
            <div className={styles.modalButtonContainer}>
                <button>Checkout</button>
            </div>
        </div>
    )
}
