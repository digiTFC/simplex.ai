import { Titles } from "../../../../../components/Titles";

interface valuesCardProps {
  title: string;
  subtitle: string;
  letter: string;
}

export const ValuesCard:React.FC<valuesCardProps> = ({
  title,
  subtitle,
  letter,
}) => {
  return (
    <div>
      <div className="flex bg-white shadow flex-col items-center justify-evenly dark:bg-klightGrey  p-8 px-10 max-w-[90vw] md:w-[320px] py-4 md:h-[230px] rounded-2xl">
        <span className="text-[45px]">
          {letter}
        </span>
        <Titles
          title={title}
          TitleStyle="!text-[22px]"
          subTitle={subtitle}
          subtitleStyle="!text-[14px]"
        ></Titles>
      </div>
    </div>
  );
};
