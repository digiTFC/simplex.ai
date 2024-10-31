import Button from "../components/general-components/button";
import GridCard from "../components/general-components/gridCard";
import gridCard from "../components/general-components/gridCard";
import RegisterForm from "../components/general-components/RegisterForm";

const setBackground = (index: number): string => {
    switch(index) {
        case 1:
            return 'bg-[url(https://res.cloudinary.com/ddqkpyo5u/image/upload/v1730370125/e4f977e1-5aa7-419b-b9ce-43973edadc3f.png)]';
        case 2:
            return 'bg-[url(https://res.cloudinary.com/ddqkpyo5u/image/upload/v1730370082/5176f3eb-a0dc-4c6f-8a9d-a64d87964d2a.png)]';
        default:
            return 'bg-[url(https://res.cloudinary.com/ddqkpyo5u/image/upload/v1730369547/058e806c-8e23-46fa-9641-fd4aa813bf97.png)]';
    }
};

const LoginSignup = () => {
    return <div>
        <div className="flex h-screen overflow-hidden ">
        <div className="w-1/2 flex items-center justify-center"> <RegisterForm></RegisterForm>  </div>
        <div className="w-1/2 self-end">
            <div className="grid grid-cols-3">
                {
                    Array.from({length:3}).map((item,index) => {
                        let  backgroundImage = setBackground(index);
                        return <div key={index} className={`${index == 1 ?`relative top-40 `:`relative top-8 `}grid-rows-3 grid gap-7`}>
                            {Array.from({length:5}).map((itm, index) => {
                               return <div>
                                    <GridCard index={index} background={backgroundImage}  ></GridCard>
                               </div>
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