import { ValuesCard } from '@/app/pages/(public)/(with-navbar)/aboutUs/_components/valuesCard';
import { Titles } from '@/app/components/general-components/Titles';
import React from 'react'

export const Values = () => {

  const values = [
    {
      letter: "E",
      title: "Enthusiastic",
      subtitle: "We bring energy and passion to every interaction, because your success fuels ours!"
    },
    {
      letter: "A",
      title: "Avant-Gardist",
      subtitle: "We’re not just ahead of the curve; we’re reshaping it with innovation that speaks your language."
    },
    {
      letter: "G",
      title: "Genius",
      subtitle: "Brilliant solutions don’t have to be complicated—just smart, simple, and tailored to you."
    },
    {
      letter: "L",
      title: "Loyal",
      subtitle: "Our commitment to your growth is rock solid. We’re in this together, every click of the way."
    },
    {
      letter: "E",
      title: "Excellent",
      subtitle: "From service to support, we aim for excellence in every detail, big or small."
    },
  ];

  return (
    <div className="text-center">
      <div className="md:w-2/4 m-auto">
        <Titles
        bigTitle={true}
          title="Our Core Values"
          subTitle="At Simplex, we believe amazing products come from amazing people. Our team celebrates diversity, creativity, and the values that keep us inspired to help businesses like yours thrive."
        />
      </div>
      <div
        className="m-auto w-fit flex flex-wrap place-items-center place-content-center md:grid-cols-3 py-12 gap-12"
      >
        {values.map((value, index) => {
          return (
            <div
              key={index}
              style={{
                gridArea: index === 0
                  ? "a"
                  : index === 1
                  ? "b"
                  : index === 2
                  ? "c"
                  : index === 3
                  ? "d"
                  : index === 4
                  ? "e"
                  : undefined,
              }}
            >
              <ValuesCard letter={value.letter} title={value.title} subtitle={value.subtitle} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
