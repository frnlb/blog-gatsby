import React from 'react'
import {LayoutProps} from "../Layout/Layout"

const Container = ({children}: LayoutProps) => {
  return (
    <div>{children}</div>
  )
}

export default Container;