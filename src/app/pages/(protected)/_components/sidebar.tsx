import React from 'react'

const SideBar = () => {
  return (
    <div className=' w-full h-full'>
        <div className='min-w-[300px] bg-klightGrey -100 h-[100vh] fixed' >
            <div className='flex items-center py-5  px-5 gap-4'>
                <div className='w-[50px] rounded-xl h-[50px] bg-gradient-to-br from-kpurple to-kpink'></div>
                <div className='flex flex-col bg-clip-text text-[24px] text-transparent bg-gradient-to-br from-kpurple to-kpink'>
                    <span className='font-semibold'>CHATBOOK</span>
                    <span className='text-white text-[12px]  opacity-50'>AI everwhere u go</span>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar