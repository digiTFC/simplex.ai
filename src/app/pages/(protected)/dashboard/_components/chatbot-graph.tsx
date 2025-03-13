import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Head from "next/head";
import ContentBox from "@/app/components/contentBox";
import Loader from "@/app/components/loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ChatbotsStatsProps = {
  stats: {
    totalChats: string;
    averageResponseTime: string;
    satisfactionRate: string;
    activeChatbots: number;
    bgColor: string;
    chatsPerDay: number[];
  };
};

export function ChatbotsStats({ stats }: ChatbotsStatsProps) {
  const lineData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Chats Per Day",
        data: stats.chatsPerDay,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="m-auto bg-white dark:bg-klightGrey mt-4 scale-[0.85]">
        <Line data={lineData} />
    </div>
  );
}