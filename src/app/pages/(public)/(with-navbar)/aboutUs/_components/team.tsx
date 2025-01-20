import { MemberCard } from '@/app/components/general-components/memberCard'
import React from 'react'
import { members } from '../_data/members'
import { Titles } from '@/app/components/general-components/Titles'

export const Team = () => {



  return (
    <div className="bg-klightGrey rounded-3xl py-12 sm:px-12  ">
    <Titles title="Meet Our Team" TitleStyle="text-center text-white"></Titles>

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


