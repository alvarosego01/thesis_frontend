


import React, { FC } from 'react'
import { ToastsMain } from './components'

export const GlobalElements: FC = () => {
  return (
    <section className="absolute top-0 bottom-0 left-0 right-0 -z-1 GlobalElements" >
        <ToastsMain />
    </section>
  )
}
