import ContentBox from '@/app/components/general-components/contentBox'
import React from 'react'


export const ContentCards = () => {
  return (
<div>
<div className='flex items-center justify-center gap-16 w-10/12 m-auto h-screen'>
        <ContentBox></ContentBox>
        <ContentBox isBlack={true}></ContentBox>
        
    </div>
</div>
  )
}
