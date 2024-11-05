import React from 'react'

interface TitleProps{
    title: string;
    subTitle?: string;
    TitleStyle?: string;
    subtitleStyle?: string;
    defaultStyle?: boolean;
}

const Titles: React.FC<TitleProps> = ({title,  subTitle, TitleStyle, subtitleStyle, defaultStyle = true}) => {
  const defaulTitle = "text-[48px] font-semibold text-white"
  const defaulSubTitle = "text-[18px] text-klight"
  return (
    <div>
        <div>
            <h2 className={`${TitleStyle} ${defaultStyle ? defaulTitle : 'text-white'} `}>{title}</h2>
            <p className={`${subtitleStyle} ${defaultStyle ? defaulSubTitle : 'text-klight'} `}>{subTitle}</p>
        </div>
    </div>
  )
}

export default Titles