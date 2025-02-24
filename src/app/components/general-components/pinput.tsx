import Link from "next/link"
import { ChangeEventHandler, useState } from "react"
import { VscEye, VscEyeClosed } from "react-icons/vsc"

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
export const Pinput:React.FC<inputProps> = ({placeholder,name,onChange,value, type,error,useLabel, className,label}) => {
    const errorStyke = 'text-red-400 text-[10px] relative  absolute  -bottom-[2px] left-1' 
    const inputStyle = `${className}  border border-gray-400  hover:border-gray-600  dark:border-klightGrey dark:text-white  dark:hover:border-klightGreyHover w-full  outline-none py-[12px] pl-[12px]  dark:bg-klightGrey   z-40  rounded-[12px]`
  const [hidePass, setHidePass] = useState(true);

  return (
    <div className="relative">
    <div className={` relative !p-0  ${inputStyle}  ${
          error
            ?"border-red-400" 
            : "hover:border-klightGreyHover "
        }`}>
      <input
        className="h-full w-full outline-none rounded-xl py-[12px] pl-[12px] pr-[28px]"
        type={ hidePass ? "password" : "text"}
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}

        required
      />

      <VscEyeClosed onClick={()=> setHidePass(!hidePass)} className={`${hidePass ? "hidden" : ""} cursor-pointer  absolute right-4 top-[50%] -translate-y-[50%]`} />
      <VscEye onClick={()=> setHidePass(!hidePass)} className={`${!hidePass ? "hidden" : ""} cursor-pointer absolute right-4 top-[50%] -translate-y-[50%]`}/>
    </div>
    
      {error  ? (
        <div className={errorStyke}>{error}</div>
      ) : null}

    
  </div>
  )
}
