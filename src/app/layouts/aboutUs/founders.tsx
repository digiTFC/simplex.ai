import { MemberCard } from '@/app/components/general-components/memberCard'
import Paragraph from '@/app/components/general-components/text'
import React from 'react'

export const Founders = () => {
  return (
    <div className="flex items-end flex-col md:flex-row justify-between md:py-24 py-12">
    <div className="md:w-1/2 order-last mt-4 md:m-0 md:order-first">
      <Paragraph
        chidlren="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        numquam perferendis illum laboriosam autem, soluta a labore
        consectetur molestiae fugiat non consequatur cupiditate mollitia
        facere, officiis nostrum possimus vitae. Debitis!"
      ></Paragraph>
      <Paragraph
        chidlren="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        numquam perferendis illum laboriosam autem, soluta a labore
        consectetur molestiae fugiat non consequatur cupiditate mollitia
        facere, officiis nostrum possimus vitae. Debitis!"
      ></Paragraph>
      <Paragraph
        chidlren="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        numquam perferendis illum laboriosam autem, soluta a labore
        consectetur molestiae fugiat non consequatur cupiditate mollitia
        facere, officiis nostrum possimus vitae. Debitis!"
      ></Paragraph>
    </div>

    <div className="flex  md:items-end items-center w-full gap-10 flex-col md:flex-row md:justify-items-end md:w-fit md:left-36 md:relative">
      <div className="z-50">
        <MemberCard
          name="Pamel Fichieu"
          position="Founder"
          image="https://res.cloudinary.com/ddqkpyo5u/image/upload/v1727641034/c836ef26-2237-4b2e-b823-c5f49c38c878.png"
          link=''
        ></MemberCard>
      </div>
      <div className="md:relative bottom-28 md:right-36 z-0 text-end">
        <MemberCard
          textEnd={true}
          name="Sanguo Ledoux"
          position="Co-founder"
          image="https://res.cloudinary.com/ddqkpyo5u/image/upload/v1727641034/c836ef26-2237-4b2e-b823-c5f49c38c878.png"
          link=''
        ></MemberCard>
      </div>
    </div>
  </div>
  )
}
