import React, { ReactNode } from 'react'
import Titles from '../general-components/Titles'

interface valuesCardProps{
    title : string
    subtitle : string
    children : ReactNode
}

export const ValuesCard:React.FC <valuesCardProps> = ({title,subtitle,children}) => {
  return (
    <div>
                    <div className="flex flex-col items-center justify-evenly bg-klightGrey w-fit p-8 px-10 w-[330px] h-[230px] rounded-2xl">
                      {children}
                      <Titles
                        title={title}
                        TitleStyle="!text-[22px]"
                        subTitle={subtitle}
                        subtitleStyle="!text-[14px]"
                      ></Titles>
                    </div>
                  </div>
  )
}
