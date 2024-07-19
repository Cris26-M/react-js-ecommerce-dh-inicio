import React, { FC } from 'react'
import styles from './CartModal.module.css'
import Close from '../../../assets/close.svg'
import { Table } from '../Table/Table'
import { useNavigate } from 'react-router-dom'

interface Props {
    handleShowCartModal: () => void
}

export const CartModal: FC<Props> = ({ handleShowCartModal }) => {

    const navigate = useNavigate()    

    const handleNavigate = ()=> {
navigate('/checkout')
handleShowCartModal()
    }
  
    return (
        <div className={styles.modalContainer}>
            <button className={styles.modalCloseButton}>
                <img src={Close} alt="Close" onClick={handleShowCartModal} />
            </button>
            <Table/>
            <div className={styles.modalButtonContainer}>
                <button onClick={handleNavigate}>Checkout</button>
            </div>
        </div>
    )
}
