import React, { ReactNode } from 'react'

//imlementing children for centering the screen for larger devices
function Container({children}: Readonly<{children: ReactNode}>) {
  return (
    <div className=' max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-l border-r'>
        {children}
    </div>
  )
}

export default Container