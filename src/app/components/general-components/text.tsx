
interface textProps{
    chidlren : string
}
const Paragraph:React.FC<textProps> = ({chidlren}) => {
  return (
    <div>
        <p className='text-white text-[18px] leading-[38px] py-4'>{chidlren}</p>
    </div>
  )
}
export default Paragraph
