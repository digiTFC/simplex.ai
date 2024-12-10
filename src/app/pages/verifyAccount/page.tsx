"use client"
import Button from '@/app/components/general-components/button'
import { Input } from '@/app/components/general-components/input'
import GridPattern from '@/components/ui/grid-pattern'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { verificationScheme } from './_schema/verfiaction-schema';
import { verifyEmail } from './_service/verify-email'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const VerifyAccount = () => {
  const [loading,setLoading] = useState(false)
  const router = useRouter()

  const formik = useFormik({
    initialValues:{
      code : ""
    },
    validationSchema: verificationScheme,
    onSubmit:async (values)=>{
          setLoading(true)


          setTimeout(async ()=>{
            const response = await verifyEmail(values.code)

            response.sucess ? toast.success(response.message) : toast.error(response.message)
            setLoading(false)
            router.replace(`auth/${"login"}`)
          },2000)
    }
  }
    
  )
  return (
    <div className='flex flex-col gap-16 text-white items-center justify-center w-full h-[100vh]'>
        <GridPattern className='opacity-50 z-40 text-white'>
        </GridPattern>
          <div className='text-center'>

          <h1 className='text-[34px]'>Verify Your Email Adrees</h1>
          <h1 className='text-khr'>We have sent a verifaction code to your adress</h1>
          </div>
        <div className=''>
        
        <Input
          name='code'
          type='number'
          placeholder='verfication code'
          useLabel={false}
          onChange={formik.handleChange}
          value={formik.values.code}
        />
        

      <div className='w-fit relative'>
      <Button
          label='Verify'
          onClick={formik.handleSubmit}
          className={`${formik.values.code.length == 0 ? ' w-fit px-3 bg-t text-khr border border-khr !cursor-disabled':'text-black bg-white' } w-[375px]  duration-3000 transition-all z-50  mt-5  h-[44px]  font-semibold rounded-lg`}
        >
          {loading? <div className='w-[20px] h-[20px] border-2 left-[135px]  absolute border-black border-t-transparent animate-spin rounded-full '></div> : ''}
        </Button>
      </div>
        </div>
    </div>
  )
}

export default VerifyAccount