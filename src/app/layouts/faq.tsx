import React from 'react'
import Titles from '../components/general-components/Titles'
import { FaqBox } from '../components/general-components/faqBox';

const Faq = () => {
  return (
    <div className='w-10/12 m-auto my-24'>
        <Titles title='Freqfently Asked Questions'></Titles>
        <div className='flex gap-x-10 '>
            {Array.from({length:2}).map((_,index) => {
                return <div className='flex flex-col gap-y-5 mt-12'>
                    {Array.from({length:4}).map((_,index) => {
                    return <FaqBox question={"How tu use this chatbot ?"} answer={" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium incidunt tempora vero soluta facere excepturi minima totam earum deleniti quis autem cum ad nam dolor, odit ea eligendi suscipit reprehenderit."} key={index}></FaqBox>
                })}
                </div>
            })}
        </div>
    </div>
  )
};

export default Faq