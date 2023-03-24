import React from 'react'
import {LayoutProps} from "../Layout/Layout"

const Container = ({children}: LayoutProps) => {
  return (
    <div className='max-w-screen-xl m-auto'>{children}</div>
  )
}

export default Container;