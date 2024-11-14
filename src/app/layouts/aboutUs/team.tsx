import { MemberCard } from '@/app/components/general-components/memberCard'
import Titles from '@/app/components/general-components/Titles'
import React from 'react'

export const Team = () => {

    const members = [
        {
            name : 'Sanguo Ledoux',
            role : 'FrontEnd Developper',
            image : 'https://res.cloudinary.com/ddqkpyo5u/image/upload/v1727641034/c836ef26-2237-4b2e-b823-c5f49c38c878.png',
            link : ''
        },
        {
            name : 'Hermann Nzeudeu',
            role : 'BackEnd Lead',
            image : 'https://res.cloudinary.com/ddqkpyo5u/image/upload/v1727640283/hermann_data_anlytics_le01ky.jpg',
            link : 'Hermann Nzeudeu'
        },
        {
            name : 'Pamel Fichieu',
            role : 'BackEnd Developer',
            image : 'https://res.cloudinary.com/ddqkpyo5u/image/upload/v1727640283/hermann_data_anlytics_le01ky.jpg',
            link : 'Hermann Nzeudeu'
        },
    ]

  return (
    <div className="bg-klightGrey rounded-3xl py-12 sm:px-12  ">
    <Titles title="Meet Our Team" TitleStyle="text-center"></Titles>

    <div className="flex flex-col md:grid grid-cols-3 place-items-center gap-y-10  md:flex-row  justify-center items-center md:justify-evenly py-12">
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


