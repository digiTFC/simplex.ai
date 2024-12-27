import { ValuesCard } from '@/app/components/aboutUsComponents/valuesCard';
import Titles from '@/app/components/general-components/Titles';
import React from 'react'

export const Values = () => {

  
    const values = {
        icon :  <svg
    
    
        className="scale-[2]"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="User / Users_Group">
          <path
            id="Vector"
            d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g></svg>
      }


  return (
    <div className=" text-center">
    <div className="md:w-2/4 m-auto">
      <Titles
        title="Our Core Values"
        subTitle="It takes great pupil to make great product our company culture champions diversity and our team members embody Pidedrive's values"
      ></Titles>
    </div>
      <div className="m-auto w-fit grid md:grid-cols-3 py-12 gap-12">
        {Array.from({ length: 6 }).map((_,index) => {
          return (
              <div key={index}>
                <ValuesCard title="Team First" subtitle="Discover how we put our team at thr heart and support each other.">
              {values['icon']}
            </ValuesCard>
              </div>
          );
        })}
      </div>
    </div>
  )
}
