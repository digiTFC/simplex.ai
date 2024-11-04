interface navProps{

}

const Nav:React.FC<navProps> = ({}) => {
    return <div>
            <div className="relative left-[42px] text-md  text-klight flex justify-evenly">
            <a className="text-hover hover:text-white hover:scale-110 transition-all duration-200">Home</a>
            <a className="text-hover hover:text-white hover:scale-110 transition-all duration-200"> Pricing</a>
            <a className="text-hover hover:text-white hover:scale-110 transition-all duration-200">About</a>
            <a className="text-hover hover:text-white hover:scale-110 transition-all duration-200">Contact</a>
        </div> 
    </div>
}

export default Nav
