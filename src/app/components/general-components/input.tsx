import { ChangeEventHandler } from "react"

interface inputProps{
    placeholder : string
    onChange? : ChangeEventHandler
    name? : string
    value? : string
    type? : string
    error? : string
    useLabel? : boolean
    className? :string
    label? : string


    

}
export const Input:React.FC<inputProps> = ({placeholder,name,onChange,value, type,error,useLabel, className,label}) => {
    const errorStyke = 'text-red-400 text-[12px]  -bottom-5 left-1' 
    const inputStyle = `${className}  border border-gray-400  hover:border-gray-600  dark:border-klightGrey dark:text-white  dark:hover:border-klightGreyHover w-full top-[746px] outline-none py-[12px] pl-[12px] dark:bg-klightGrey   z-40 left-[5292px] rounded-[12px]`

  return (
    <div className='flex flex-col relative w-full'>
      { useLabel == false ? '' : <label className={`text-klight transition-all relative left-1 `} htmlFor={placeholder}>{label ?? placeholder}</label>  }
        <input className={inputStyle} autoComplete="off"  type={type??'text'} name={name??''}  id={placeholder} placeholder={placeholder} onChange={onChange} value={value}/>
        {error ? <div className={errorStyke}>{error}</div>:null}
    </div>
  )
}
