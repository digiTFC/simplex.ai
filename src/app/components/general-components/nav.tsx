'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

interface navPros{
    column? : boolean
    style? : string
    footer? : boolean
}
const Nav:React.FC<navPros> = ({column,style,footer}) => {
    const router = useRouter()
    const navStyle = `${footer ? 'hover:text-white hover:underline underline-offset-8' :'hover:scale-110 after:dark:bg-white after:bg-black dark:hover:text-white hover:text-black ' } text-hover    transition-all duration-200  ${style} border-kOnSecondary py-4  text-center ${column ? '  md:py-2' : `md:py-0`}`
    return <div>
            <div className={`relative  text-md  w-full  black:text-klight  text-gray-500  flex  md:justify-evenly flex-col  ${column ? 'flex-col h-full' : `h-full md:flex-row  left-[42px]`} ` }>
            <Link href="/pages/home" className={navStyle}>Home</Link>
            <Link href="/pages/pricing" className={navStyle}>Pricing</Link>
            <Link href="/pages/aboutUs" className={navStyle}>About</Link>
            <Link href="/pages/contactUs" className={navStyle}>ContactUs</Link>
        </div> 
    </div>
}

export default Nav

