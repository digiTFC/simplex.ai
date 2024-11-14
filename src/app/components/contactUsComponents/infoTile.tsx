import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { string } from "yup"

interface infoTileProps{
    icon : IconDefinition
    body : string 
}
const InfoTile:React.FC<infoTileProps> = ({icon, body}) => {
  return (
    <div>
    <div className="text-white  py-4">
    <FontAwesomeIcon icon={icon} />
    <span className="pl-3">{body}</span>
  </div>
    </div>
  )
}



export default InfoTile