const LoginSignup = () => {
    return <div>
        <div className="flex h-screen overflow-hidden ">
        <div className="w-1/2"></div>
        <div className="w-1/2 self-end">
            <div className="grid grid-cols-3">
                {
                    Array.from({length:3}).map((item,index) => {
                        let  bg = "bg-klightGrey"

                        if(index == 1){
                            bg = "bg-[url(https://res.cloudinary.com/ddqkpyo5u/image/upload/v1730370125/e4f977e1-5aa7-419b-b9ce-43973edadc3f.png)]"
                        }else if(index == 2){
                            bg = "bg-[url(https://res.cloudinary.com/ddqkpyo5u/image/upload/v1730370082/5176f3eb-a0dc-4c6f-8a9d-a64d87964d2a.png)]"
                            
                        }else{
                            bg = "bg-[url(https://res.cloudinary.com/ddqkpyo5u/image/upload/v1730369547/058e806c-8e23-46fa-9641-fd4aa813bf97.png)]"

                        }

                        
                        return <div key={index} className={`${index == 1 ?`relative top-40 `:`relative top-8 `}grid-rows-3 grid gap-7`}>
                            {Array.from({length:5}).map((itm, index) => {
                               return <div  className={`${index == 3 ? bg : 'bg-klightGrey'} bg-contain bg-no-repeat bg-center w-[15vw] h-[35vh] rounded-2xl`}></div>
                            })}
                            
                        </div>
                    }
                    )
                }
            </div>
        </div>
        </div>
    </div>
}

export default LoginSignup