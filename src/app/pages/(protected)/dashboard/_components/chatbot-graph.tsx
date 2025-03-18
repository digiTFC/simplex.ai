// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import Head from "next/head";
// import ContentBox from "@/app/components/contentBox";
// import Loader from "@/app/components/loader";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// type ChatbotsStatsProps = {
//   stats: {
//     totalChats: string;
//     averageResponseTime: string;
//     satisfactionRate: string;
//     activeChatbots: number;
//     bgColor: string;
//     chatsPerDay: number[];
//   };
// };

// export function ChatbotsStats({ stats }: ChatbotsStatsProps) {
//   const lineData = {
//     labels: [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday",
//     ],
//     datasets: [
//       {
//         label: "Chats Per Day",
//         data: stats.chatsPerDay,
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//       },
//     ],
//   };

//   return (
//     <div className="m-auto bg-white dark:bg-klightGrey mt-4 scale-[0.85]">
//         <Line data={lineData} />
//     </div>
//   );
// }

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Bot A',
  'Bot B',
  'Bot C',
  'Bot D',
  'Bot E',
  'Bot F',
  'Bot G',
];

export default function ChatbotsStats() {
  return (
    <LineChart
      height={300}
      series={[
        { data: pData, label: 'messages', yAxisId: 'leftAxisId' },
        { data: uData, label: 'responses', yAxisId: 'rightAxisId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      rightAxis="rightAxisId"
    />
  );
}
