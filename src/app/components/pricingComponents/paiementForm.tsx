import React, { useState } from 'react'
import Titles from '../general-components/Titles'
import { Input } from '../general-components/input'
import Button from '../general-components/button';
import { useFormik } from 'formik';
import { paymentScheme } from '@/app/pages/(protected)/subscriptions/[paiment]/scheme/paymentScheme';
import { toast} from 'sonner';
import subscriptionChoice from '@/app/pages/(protected)/subscriptions/_service/subscription-choice';

interface paiementFormProprs{
    price : number
    subscriptionId : number
}

export const PaiementForm:React.FC<paiementFormProprs> = ({price,subscriptionId}) => {
    const [isLoading, setIsLoading] = useState(false)

    const  login = () => {
        toast.success('Payment Succesful')
        setIsLoading(false)

    } 

    const formik = useFormik({
        initialValues : {
            "phone_number":'',
            "cardDetails":'',
            "name":'',
            "country":'',
            "adress":'',
        },
        validationSchema : paymentScheme,
        onSubmit : (values) => {
            setIsLoading(true)
            subscriptionChoice(subscriptionId,values.phone_number)
            console.log("click")
            setTimeout(login,
                2000
            )
        },
    })

    const tva = price * 0.2
    const total = price + tva    
  return (
    <div className='text-white'>
        <form onSubmit={formik.handleSubmit}> 
        <div className=''><Titles title='Payment Details' subTitle='Complete your purchase by providing payment details'></Titles></div>
       
        <div className='relative'>
        <Input placeholder='Phone Number' value={formik.values.phone_number} error={formik.errors.phone_number} name='phone_number' onChange={formik.handleChange}></Input>
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
                <span>${price.toFixed(2)}</span>
            </div>
            <div className='flex my-3 justify-between' >
                <span>TVA(0.7)</span>
                <span>${tva.toFixed(2)}</span>
            </div>
            <div className='flex justify-between'>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
        </div>

        <div className='w-fit text-center flex flex-col'>
        <div className='relative'>
        <Button className='bg-gradient-to-br from-kpink to-kpurple  rounded h-[44px] w-[380px] focus:w-[375px]' isLoading={isLoading} onClick={() => formik.submitForm()} label={isLoading ? 'Processing...' : `Pay ${total.toFixed(2)}$`}></Button>
            
        </div>
        <span className='text-klight text-[12px]'>Payments are encrypted and secured</span>
        </div>
       </form>
        
    </div>
  )
}
