import { boolean } from "yup"

interface navPros{
    column? : boolean
}
const Nav:React.FC<navPros> = ({column}) => {
    return <div>
            <div className={`relative  text-md  text-klight flex  justify-evenly  ${column? 'flex-col h-full' : `left-[42px]`} ` }>
            <a className={`text-hover hover:text-white hover:scale-110 transition-all duration-200 ${column? 'my-2' : ``}`}>Home</a>
            <a className={`text-hover hover:text-white hover:scale-110 transition-all duration-200 ${column? 'my-2' : ``}`}> Pricing</a>
            <a className={`text-hover hover:text-white hover:scale-110 transition-all duration-200 ${column? 'my-2' : ``}`}>About</a>
            <a className={`text-hover hover:text-white hover:scale-110 transition-all duration-200 ${column? 'my-2' : ``}`}>Contact</a>
        </div> 
    </div>
}

export default Nav
