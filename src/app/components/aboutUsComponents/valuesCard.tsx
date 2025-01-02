import Titles from "../general-components/Titles";

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
      <div className="flex flex-col items-center justify-evenly bg-klightGrey  p-8 px-10 w-[320px] h-[230px] rounded-2xl">
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
