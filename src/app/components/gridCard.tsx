interface gridCardProps{
    background : string,
    index : number
}

const GridCard:React.FC<gridCardProps> = ({background, index}) => {
    return <div>
        <div  className={`${index == 3 ? background : 'bg-klightGrey'} bg-contain bg-no-repeat bg-center w-[15vw] h-[35vh] rounded-2xl`}></div>
    </div>
}

export default GridCard
