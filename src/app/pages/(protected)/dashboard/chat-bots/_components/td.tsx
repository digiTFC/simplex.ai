import React, { ReactNode } from 'react'

export const Td:React.FC<{children : ReactNode, className? : string}> = ({children , className}) => {
  return (
    <td className={`py-4 ${className}`}>{children}</td>
  )
}
