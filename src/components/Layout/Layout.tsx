import React from 'react'

export interface LayoutProps {
    children: React.ReactNode | React.ReactNode[];
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4">{children}</div>
  )
}

export default Layout