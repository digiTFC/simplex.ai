import { ChangeEventHandler } from "react"

interface textAreaProps{
    placeholder : string
    onChange? : ChangeEventHandler
    name? : string
    value? : string
    error? : string
    useLabel? : boolean

    

}
export const TextArea:React.FC<textAreaProps> = ({placeholder,name,onChange,value,error,useLabel}) => {
    const errorStyke = 'text-red-400 text-[12px] absolute -bottom-5'
    const inputStyle = 'text-klight border z-50 border-klightGrey  hover:border-klightGreyHover w-[380px] top-[746px] outline-none py-[12px] px-[28px] bg-klightGrey left-[5292px] rounded-[5px] my-[px]'

  return (
    <div className='flex flex-col relative'>
      { useLabel == false ? '' : <label className={`text-klight transition-all relative ${value != null ? value.length == 0?' top-5': `-top-0 pt-5 pb-2` : ''}`} htmlFor={placeholder}>{placeholder}</label>  }
        <textarea className={inputStyle} name={name??''}  id={placeholder} placeholder={placeholder} onChange={onChange} value={value}/>
        {error ? <div className={errorStyke}>{error}</div>:null}
    </div>
  )
}
