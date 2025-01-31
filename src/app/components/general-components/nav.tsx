'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

interface navPros{
    column? : boolean
    style? : string
    footer? : boolean
    onClick? : ()=>void
}
const Nav:React.FC<navPros> = ({column,style,footer,onClick}) => {
    const router = useRouter()
    const navStyle = `${footer ? 'hover:text-white  hover:underline underline-offset-8' :'text-[17px] text-center  hover:scale-110 after:dark:bg-white after:bg-black dark:hover:text-white hover:text-black ' } text-hover    transition-all duration-200  ${style} border-kOnSecondary py-4  text-center ${column ? '  md:py-2' : `md:py-0`}`
    return <div>
            <div className={`relative  text-md w-full  md:gap-8 md:items-end items-center black:text-klight  text-gray-500  flex  text-center md:justify-center   ${column ? 'flex-col text-center' : `h-full md:flex-row `} ` }>
            <Link href="/pages/home" className={navStyle} onClick={()=>onClick ? onClick() : ''}>Home</Link>
            <Link href="/pages/pricing" className={navStyle} onClick={()=>onClick ? onClick() : ''}>Pricing</Link>
            <Link href="/pages/aboutUs" className={navStyle} onClick={()=>onClick ? onClick() : ''}>About</Link>
            <Link href="/pages/contactUs" className={navStyle} onClick={()=>onClick ? onClick() : ''}>ContactUs</Link>
        </div> 
    </div>
}

export default Nav

