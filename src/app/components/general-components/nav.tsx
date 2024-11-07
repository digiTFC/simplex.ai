interface navPros{
    column? : boolean
    style? : string
}
const Nav:React.FC<navPros> = ({column,style}) => {
    const navStyle = `text-hover md:hover:text-white md:hover:scale-110 transition-all duration-200  ${style} border-kOnSecondary py-4  text-center ${column ? '  md:py-2' : `md:py-0`}`
    return <div>
            <div className={`relative  text-md  w-full  text-klight flex  md:justify-evenly flex-col  ${column ? 'flex-col h-full' : `h-full md:flex-row  left-[42px]`} ` }>
            <a className={navStyle}>Home</a>
            <a className={navStyle}>Pricing</a>
            <a className={navStyle}>About</a>
            <a className={navStyle}>Contact</a>
        </div> 
    </div>
}

export default Nav
