import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactNode } from "react"

interface infoTileProps{
    children : ReactNode
    body : string 
}
const InfoTile:React.FC<infoTileProps> = ({children, body}) => {
  return (
    <div className="">
    <div className="text-white flex items-center py-2 md:py-4">
    {children}
    <span className="pl-3">{body}</span>
  </div>
    </div>
  )
}



export default InfoTile