import React from 'react'

type Props = {
  children: React.ReactNode
}

const BlurPage = ({ children }: Props) => {
  return (
    <div
      className="h-screen  md:ml-72 mt-[75px]  backdrop-blur-[35px] dark:bg-muted/40 bg-muted/60  mx-auto pt-24 p-4 absolute top-0 right-0 left-0 botton-0 "
      id="blur-page"
    >
      {children}
    </div>
  )
}

export default BlurPage