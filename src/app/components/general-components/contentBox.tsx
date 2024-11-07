import React from 'react'
import Titles from './Titles'
import Button from './button'

interface contentBoxProps{
  isBlack? : boolean
}

const ContentBox:React.FC<contentBoxProps> = ({isBlack}) => {
  const buttonStyle = !isBlack ? "z-50 bg-black trenasition-all text-white hover:text-black px-8 h-[44px] rounded-md   hover:bg-white hover:text-black  w-fit  " : 'z-50 bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700  w-[139px] h-[44px]  rounded-[5px]  px-[32px]' 
  return (
    <div>
        <div className={` w-[410px] relative overflow-hidden h-[500px] ${!isBlack ? `bg-gradient-to-br from-kpink to-kpurple` : `bg-klightGrey` }   py-10 px-10 rounded-3xl`}>
        
        <div className={`${isBlack ? 'boder-white':'border-konPurple '} w-[456px]  h-[456px] rounded-full border absolute top-[35%] right-[30%] opacity-25`}></div>
        <div className={`${isBlack ? 'boder-white':'border-konPurple '}  w-[242px]  h-[242px] rounded-full border absolute -top-[25%] left-[60%] opacity-25`}></div>
            
      <div className=' flex flex-col justify-between h-full'>
      <Titles title="We're here to guide and help you at all times
            "  TitleStyle='md:text-[43px] leading-[55px] z-50' subtitleStyle='text-white md:text-[16px] font-light mt-8' subTitle='A good design is not only aesthetically pleasing, but also functional. '></Titles>

            <Button label="Try Now !" className={buttonStyle}></Button>
      </div>
        </div>
    </div>
  )
}

export default ContentBox