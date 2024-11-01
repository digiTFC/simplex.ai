
interface tileProsp{
    title : string
    index : number
}
const PrincingTile:React.FC<tileProsp> = ({title, index}) => {
    return <div>
            <div key={index} className="pb-[26px] flex items-center">
                <div className="p-3 mr-[16px] flex items-center rounded-lg w-fit bg-kOnSecondary">
                  <svg
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="7.0708"
                      y="0.121323"
                      width="2"
                      height="7"
                      rx="1"
                      transform="rotate(45 7.0708 0.121323)"
                      fill="white"
                    />
                    <rect
                      x="4.94971"
                      y="5.07106"
                      width="2"
                      height="5"
                      rx="1"
                      transform="rotate(135 4.94971 5.07106)"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className={index >2 ?  `text-klight` : ''} >{title}</span>
              </div>
    </div>
    
}
export default PrincingTile