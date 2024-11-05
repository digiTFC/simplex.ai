import { ReactNode } from "react"

interface iconBoxProps{
    feature : ReactNode
}

const IconBox:React.FC<iconBoxProps> = ({feature}) => {
    return <div>
          <div className="bg-kOnSecondary icon-box  group-hover:bg-gradient-to-br group-hover:from-kpink transition-all duration-300 group-hover:to-kpurple w-[104px] h-[104px] flex items-center justify-center rounded-3xl">
                    <div>{feature}</div>
            </div>
    </div>
}

export default IconBox



