import React from 'react'
import { Outlet } from 'react-router-dom'

export const LayoutMain = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
