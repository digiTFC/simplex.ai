import Image from "next/image"

interface partnerBoxProps{
  image : string
  alt : string
}
const PartnerBox:React.FC<partnerBoxProps> = ({image,alt}) => {
    return <div>
                      <div
                
                className="dark:bg-black bg-white flex items-center justify-center rounded-2xl  w-[160px] h-[92px]"
              >
                  <Image src={image}
                   alt={alt}
                   width={200}
                   height={200}
                  >

                  </Image>
              </div>
    </div>
}
export default PartnerBox