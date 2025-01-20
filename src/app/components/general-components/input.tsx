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


    

}
export const Input:React.FC<inputProps> = ({placeholder,name,onChange,value, type,error,useLabel, className}) => {
    const errorStyke = 'text-red-400 text-[12px] absolute -bottom-5'
    const inputStyle = `${className} border border-gray-400  hover:border-gray-600  dark:border-klightGrey dark:text-white  dark:hover:border-klightGreyHover w-[350px] top-[746px] outline-none py-[12px] px-[28px] dark:bg-klightGrey left-[5292px] rounded-[12px]`

  return (
    <div className='flex flex-col relative w-full'>
      { useLabel == false ? '' : <label className={`text-klight transition-all relative ${value != null ? value.length == 0?' top-5': `-top-0 pt-5 pb-2` : ''}`} htmlFor={placeholder}>{placeholder}</label>  }
        <input className={inputStyle} autoComplete="off"  type={type??'text'} name={name??''}  id={placeholder} placeholder={placeholder} onChange={onChange} value={value}/>
        {error ? <div className={errorStyke}>{error}</div>:null}
    </div>
  )
}
