import React from 'react'

interface TitleProps{
    title: string;
    subTitle?: string;
    TitleStyle?: string;
    subtitleStyle?: string;
}

const Titles: React.FC<TitleProps> = ({title, subTitle, TitleStyle, subtitleStyle}) => {
  return (
    <div>
        <div>
            <h2 className={`${TitleStyle} text-white`}>{title}</h2>
            <p className={`${subtitleStyle} text-klight`}>{subTitle}</p>
        </div>
    </div>
  )
}

export default Titles