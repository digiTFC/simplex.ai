import React from 'react'
import Titles from '../general-components/Titles'
import { Input } from '../general-components/input'
import Button from '../general-components/button';
export const PaiementForm = () => {
  return (
    <div className='text-white'>
        <div className=''><Titles title='Payment Details' subTitle='Complete your purchase by providing payment details'></Titles></div>
        <Input placeholder='Email address'></Input>
        <div className='w-fit relative'>
            <Input placeholder='Card details'/>
        <div className='font-thin text-khr absolute right-5 bottom-3 z-50'>MM/YY/CVC</div>
        </div>
        <Input placeholder='Cardholder Name'></Input>
        <Input placeholder='Country'></Input>
        <Input placeholder='Adress'></Input>

        <div className='w-[380px] px-8 my-10  py-2 rounded-md  border border-klight border-dashed'>
            <div className='flex justify-between'>
                <span>Subtotal</span>
                <span>$111.00</span>
            </div>
            <div className='flex my-3 justify-between' >
                <span>TVA(0.7)</span>
                <span>$1.00</span>
            </div>
            <div className='flex justify-between'>
                <span>Total</span>
                <span>$129.00</span>
            </div>
        </div>

<div className='w-fit text-center'>
<Button className='bg-gradient-to-br from-kpink to-kpurple  rounded h-[44px] w-[380px] ' label='Pay $129.00'></Button>
<span className='text-klight text-[12px]'>Payments are encrypted and secured</span>
</div>
        
    </div>
  )
}
