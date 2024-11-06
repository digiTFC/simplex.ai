import { ReactNode } from "react"

interface iconBoxProps{
    feature? : ReactNode,
    children? :ReactNode
}

const IconBox:React.FC<iconBoxProps> = ({feature, children}) => {
    return <div>
          <div className={`${ feature != null? ` bg-kOnSecondary icon-box  group-hover:bg-gradient-to-br group-hover:from-kpink transition-all duration-300 group-hover:to-kpurple w-[104px] h-[104px] flex items-center justify-center rounded-3xl` : `flex items-center hover:scale-[1.2] justify-center  h-[40px] w-[40px] rounded-lg bg-klightGrey  hover:bg-kOnSecondary`}`}>
                    <div>{feature ?? children}</div>
            </div>
    </div>
}

export default IconBox



