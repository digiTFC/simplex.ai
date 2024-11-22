import { MemberCard } from '@/app/components/general-components/memberCard'
import Titles from '@/app/components/general-components/Titles'
import React from 'react'

export const Team = () => {

    const members = [
        {
            name : 'Sanguo Ledoux',
            role : 'FrontEnd Developper',
            image : 'https://res.cloudinary.com/ddqkpyo5u/image/upload/v1727641034/c836ef26-2237-4b2e-b823-c5f49c38c878.png',
            link : 'https://www.linkedin.com/in/ledoux-sanguo-501a54264/'
        },
        {
            name : 'Hermann Nzeudeu',
            role : 'BackEnd Lead',
            image : 'https://res.cloudinary.com/ddqkpyo5u/image/upload/v1727640283/hermann_data_anlytics_le01ky.jpg',
            link : 'https://www.linkedin.com/in/hermann-nzeudeu-b10574229/'
        },
        {
            name : 'Pamel Fichieu',
            role : 'BackEnd Developer',
            image : 'https://res.cloudinary.com/ddqkpyo5u/image/upload/v1732025369/de2efce3-65d4-45fd-a761-73e9f17b2940.png',
            link : 'Hermann Nzeudeu'
        },
        {
          name : 'Toko Michel',
          role : 'BackEnd Developer',
          image : 'https://res.cloudinary.com/ddqkpyo5u/image/upload/v1732030549/5c7729ab-0c5f-459d-8d0a-7c36572fdfe5.png',
          link : 'https://www.linkedin.com/in/michel-toko-wouendeu-383403246/'
      },
    ]

  return (
    <div className="bg-klightGrey rounded-3xl py-12 sm:px-12  ">
    <Titles title="Meet Our Team" TitleStyle="text-center"></Titles>

    <div className="flex flex-col md:grid grid-cols-3 place-items-center gap-y-10 w-fit m-auto gap-20  md:flex-row  justify-center items-center md:justify-evenly py-12">
      {members.map((member,index) => {
        return <div key={index} className="w-fit p-[1px] relative rounded-3xl">
        <div className="bg-gradient-to-br absolute via-blue-500 inset-0 from-kpink to-kpurple rounded-3xl"></div>
        <MemberCard
          name={member.name}
          position={member.role}
          image={member.image}
          link={member.link}
        ></MemberCard>
      </div> 
      })

      }
    </div>
  </div>
  )
}


