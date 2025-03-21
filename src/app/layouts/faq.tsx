import React from 'react'
import { FaqBox } from '../components/faqBox';
import { Titles } from '../components/Titles';

const Faq = () => {
  return (
    <div className='w-10/12 m-auto my-24'>
        <Titles title='Freqfently Asked Questions'></Titles>
        <div className='flex gap-x-10 '>
            {Array.from({length:2}).map((_,index) => {
                return <div key={index} className='flex flex-col gap-y-5 mt-12'>
                    {Array.from({length:4}).map((_,idx) => {
                    return <FaqBox question={"How tu use this chatbot ?"} answer={" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium incidunt tempora vero soluta facere excepturi minima totam earum deleniti quis autem cum ad nam dolor, odit ea eligendi suscipit reprehenderit."} key={idx}></FaqBox>
                })}
                </div>
            })}
        </div>
    </div>
  )
};

export default Faq