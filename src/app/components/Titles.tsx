import React from 'react'

interface TitleProps{
    title: string;
    subTitle?: string;
    TitleStyle?: string;
    subtitleStyle?: string;
    defaultStyle?: boolean;
    bigTitle? : boolean;
}

export const Titles: React.FC<TitleProps> = ({title, bigTitle,  subTitle, TitleStyle, subtitleStyle, defaultStyle = true}) => {
  const defaulTitle = `${bigTitle?' md:text-[48px] text-[30px]': 'md:text-[38px] text-[21px]'  } font-semibold `
  const defaulSubTitle = "text-[16px] md:text-[18px]"
  return (
    <div>
        <div className='flex flex-col'>
            <h2 className={`${TitleStyle} ${defaultStyle ? defaulTitle : ''}`}>{title}</h2>
            <p className={`${subtitleStyle} ${defaultStyle ? defaulSubTitle : ''} dark:text-klight text-gray-600`}>{subTitle}</p>
        </div>
    </div>
  )
}
