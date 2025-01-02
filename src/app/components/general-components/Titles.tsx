import React from 'react'

interface TitleProps{
    title: string;
    subTitle?: string;
    TitleStyle?: string;
    subtitleStyle?: string;
    defaultStyle?: boolean;
}

const Titles: React.FC<TitleProps> = ({title,  subTitle, TitleStyle, subtitleStyle, defaultStyle = true}) => {
  const defaulTitle = "text-[39px] md:text-[48px] font-semibold "
  const defaulSubTitle = "text-[14px] md:text-[18px]"
  return (
    <div>
        <div className='flex flex-col'>
            <h2 className={`${TitleStyle} ${defaultStyle ? defaulTitle : ''}`}>{title}</h2>
            <p className={`${subtitleStyle} ${defaultStyle ? defaulSubTitle : ''} text-klight`}>{subTitle}</p>
        </div>
    </div>
  )
}

export default Titles