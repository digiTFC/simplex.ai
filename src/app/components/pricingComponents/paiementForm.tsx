import React, { useState } from 'react'
import Titles from '../general-components/Titles'
import { Input } from '../general-components/input'
import Button from '../general-components/button';
import { useFormik } from 'formik';
import { paymentScheme } from '@/app/scheme/paymentScheme';
import { toast} from 'sonner';
export const PaiementForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const  login = () => {
        toast.success('Payment Succesful')
    } 

    const formik = useFormik({
        initialValues : {
            "email":'',
            "cardDetails":'',
            "name":'',
            "country":'',
            "adress":'',
        },
        validationSchema : paymentScheme,
        onSubmit : () => {
            setIsLoading(true)
            setTimeout(login,
                2000
            )
        },
    })
    
  return (
    <div className='text-white'>
        <form onSubmit={formik.handleSubmit}> 
        <div className=''><Titles title='Payment Details' subTitle='Complete your purchase by providing payment details'></Titles></div>
       
        <div className='relative'>
        <Input placeholder='Email address' value={formik.values.email} error={formik.errors.email} name='email' onChange={formik.handleChange}></Input>
        </div>
        <div className='w-fit relative'>
            <Input placeholder='Card details' type='number' value={formik.values.cardDetails} error={formik.errors.cardDetails}  name='cardDetails' onChange={formik.handleChange}/>
        <div className='font-thin text-khr bg-klightGrey pt-2n absolute right-5 bottom-3 z-50' >MM/YY/CVC</div>
        </div>
        <Input placeholder='Cardholder Name' value={formik.values.name} error={formik.errors.name}  name='name' onChange={formik.handleChange}></Input>
        <Input placeholder='Country' value={formik.values.country} error={formik.errors.country}  name='country' onChange={formik.handleChange}></Input>
        <Input placeholder='Adress' value={formik.values.adress}  error={formik.errors.adress} name='adress' onChange={formik.handleChange}></Input>

        <div  className='w-[380px] px-8 my-10  py-2 rounded-md  border border-klight border-dashed'>
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

        <div className='w-fit text-center flex flex-col'>
        <div className='relative'>
        <Button className='bg-gradient-to-br from-kpink to-kpurple  rounded h-[44px] w-[380px] focus:w-[375px]' isLoading={isLoading} onClick={() => formik.submitForm()} label={isLoading ? 'Processing...' : 'Pay 299'}></Button>
            
        </div>
        <span className='text-klight text-[12px]'>Payments are encrypted and secured</span>
        </div>
       </form>
        
    </div>
  )
}
