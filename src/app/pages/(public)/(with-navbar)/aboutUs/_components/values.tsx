import { ValuesCard } from '@/app/components/aboutUsComponents/valuesCard';
import { Titles } from '@/app/components/general-components/Titles';
import React from 'react'

export const Values = () => {

  
      const values = [{
        letter:"E",
        title:"Enthousiastic",
        subtitle:""
      },
      {
        letter:"A",
        title:"Avant Gardist",
        subtitle:""
      },
      {
        letter:"G",
        title:"Genious",
        subtitle:""
      },
      {
        letter:"L",
        title:"Loyal",
        subtitle:""
      },
      {
        letter:"E",
        title:"Excellent",
        subtitle:""
      },]



  return (
    <div className=" text-center">
    <div className="md:w-2/4 m-auto">
      <Titles
        title="Our Core Values"
        subTitle="It takes great pupil to make great product our company culture champions diversity and our team members embody Pidedrive's values"
      ></Titles>
    </div>
      <div className="m-auto w-fit flex flex-wrap place-items-center place-content-center md:grid-cols-3 py-12 gap-12"
      >
        {values.map((value,index) => {
          return (
              <div key={index}
              style={{
                gridArea: index === 0 ? "a" : index === 1 ? "b" : index === 2 ? "c" : index === 3 ? "d" : index === 4 ? "e" : undefined,
              }}>
                <ValuesCard letter={value.letter} title={value.title} subtitle={value.subtitle}>
              
            </ValuesCard>
              </div>
          );
        })}
      </div>
    </div>
  )
}
