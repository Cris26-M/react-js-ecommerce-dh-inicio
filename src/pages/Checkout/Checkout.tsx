import React from 'react'
import styles from './Checkout.module.css'
import { Table } from '../../components/ui/Table/Table'
import { CardCredit } from '../../components/ui/CardCredit/CardCredit'
import { Toaster } from 'sonner'

export const Checkout = () => {
  return (
    <div className={styles.container}>
      <Toaster richColors visibleToasts={1}/>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.grid}>
        <div className={styles.tableContainer}>
          <Table />
        </div>
        <div>
          <CardCredit />
        </div>
      </div>
    </div>
  )
}
