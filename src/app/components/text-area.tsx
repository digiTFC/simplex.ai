import { ChangeEventHandler } from "react"

interface textAreaProps{
    placeholder : string
    onChange? : ChangeEventHandler
    name? : string
    value? : string
    error? : string
    useLabel? : boolean
    className? : string

    

}
export const TextArea:React.FC<textAreaProps> = ({placeholder,className,name,onChange,value,error,useLabel}) => {
    const errorStyke = 'text-red-400 text-[12px] absolute -bottom-5'
    const inputStyle = 'border border-gray-400  hover:border-gray-600  dark:border-klightGrey dark:text-white  dark:hover:border-klightGreyHover w-full  outline-none py-[12px] px-[12px] dark:bg-klightGrey rounded-[12px]'

  return (
    <div className={`flex flex-col relative ${className}`}>
      { useLabel == false ? '' : <label className={`text-klight transition-all relative ${value != null ? value.length == 0?' top-5': `-top-0 pt-5 pb-2` : ''}`} htmlFor={placeholder}>{placeholder}</label>  }
        <textarea className={inputStyle} name={name??''}  id={placeholder} placeholder={placeholder} onChange={onChange} value={value}/>
        {error ? <div className={errorStyke}>{error}</div>:null}
    </div>
  )
}
