import React from 'react'
import Paragraph from './text'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Titles } from './Titles'

interface testimonialProps{
    name : string,
    profession : string
    rating? : number
}

const TestimonialCard:React.FC<testimonialProps> = ({}) => {
  return (
    <div>
        <div className='w-[540px] h-[337px] flex flex-col justify-between bg-klightGrey rounded-2xl px-[40px] py-8 pb-8'>
            <Paragraph chidlren='Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve. Loren'></Paragraph>
            <hr className='border-khr '/>
            <div className='flex items-center justify-between'>
            <div className='flex '>
                <div className=' mr-4 w-[50px] h-[50px] rounded-full bg-klight'> </div>
                <Titles title='Jane Doe' TitleStyle='md:text-[20px] font-semibold' subtitleStyle='md:text-[14px]'  subTitle='CEO of ledoux' ></Titles>
            </div>
                <div className='flex'>
                    {Array.from({length:5}).map((_,index) => {
                       return <div key={index} className='ml-2 text-amber-400'>
                        <FontAwesomeIcon  icon={faStar} className='w-[23px] '></FontAwesomeIcon>
                       </div>
                    })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard