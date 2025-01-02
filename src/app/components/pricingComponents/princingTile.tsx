
interface tileProsp{
    title : string
    isPresent : boolean
}
const PrincingTile:React.FC<tileProsp> = ({title,isPresent}) => {
    return <div>
            <div  className="pb-[26px] flex items-center">
                <div className=" center h-[30px] w-[30px] mr-[16px]  rounded-lg  bg-kOnSecondary">
{isPresent ?                  <svg
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
                  </svg> : <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
}
                </div>
                <span className={!isPresent ?  `text-klight line-through` : ''} >{title}</span>
              </div>
    </div>
    
}
export default PrincingTile