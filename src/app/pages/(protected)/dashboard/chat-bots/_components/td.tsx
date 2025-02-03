import React, { ReactNode } from 'react'

export const Td:React.FC<{children : ReactNode, className? : string}> = ({children , className}) => {
  return (
    <td className={`py-3  text-start ${className}`}>{children}</td>
  )
}
