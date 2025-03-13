import { MemberCard } from '@/app/components/memberCard';
import Paragraph from '@/app/components/text';
import React from 'react';

export const Founders = () => {
  return (
    <div className="flex items-end flex-col md:flex-row justify-center">
      <div className="md:w-1/2 2xl-w-1/3 text-center  md:text-start order-last mt-4 md:m-0 md:order-first">
        <Paragraph
          chidlren="Simplex started as an idea between two innovators who saw the potential for African businesses to thrive with technology that speaks to their unique needs. Our founders share a vision of making chatbot creation as simple as a few clicks."
        ></Paragraph>
        <Paragraph
          chidlren="With a shared passion for innovation and inclusivity, Pamel Fichieu and Sanguo Ledoux built Simplex to empower businesses and developers alike. They believe in delivering cutting-edge, user-friendly solutions designed to address real challenges across diverse industries."
        ></Paragraph>
        <Paragraph
          chidlren="Together, they’ve laid the foundation for a platform that champions multilingual support, seamless integration with local tools, and a whole lot of heart. Simplex isn’t just a platform—it’s a movement to transform how Africa engages with AI."
        ></Paragraph>
      </div>

      <div className="flex md:items-end items-center w-full gap-10 flex-col md:flex-row md:justify-items-end md:w-fit md:left-36 md:relative">
        <div className="z-50">
          <MemberCard
            name="Pamel Fichieu"
            position="Founder"
            image="https://res.cloudinary.com/ddqkpyo5u/image/upload/v1740657724/WhatsApp_Image_2025-02-03_at_17.28.49_pzqiwn.jpg"
            link="https://www.linkedin.com/in/pamel-fichieu-3778542b4/"
          ></MemberCard>
        </div>
        <div className="md:relative bottom-28 md:right-36 z-0 md:text-end">
          <MemberCard
            textEnd={true}
            name="Sanguo Ledoux"
            position="Co-founder"
            image="https://res.cloudinary.com/ddqkpyo5u/image/upload/v1727641034/c836ef26-2237-4b2e-b823-c5f49c38c878.png"
            link="https://www.linkedin.com/in/ledoux-sanguo-501a54264/"
          ></MemberCard>
        </div>
      </div>
    </div>
  );
};
