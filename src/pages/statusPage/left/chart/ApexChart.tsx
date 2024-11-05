import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// 타입 정의 (항목 3개 고정)
interface DonutChartProps {
  series: [number, number, number]; // 항목 3개 고정
}

const DonutChart: React.FC<DonutChartProps> = ({ series }) => {
  // 차트 옵션 설정
  const options: ApexOptions = {
    chart: {
      type: "donut", // 도넛 차트로 설정
    },
    colors: ["#AA2931", "#E1A609", "#405A89"], // 항목 3개의 색상 지정
    plotOptions: {
      pie: {
        donut: {
          size: "90%", // 도넛 두께 설정
          labels: {
            show: false,
          },
        },
      },
    },
    stroke: {
      show: false, // 테두리 제거
    },
    dataLabels: {
      enabled: false, // 항목별 레이블 숨김
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      show: false, // 범례 숨김
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" width="230px" />
    </div>
  );
};

export default DonutChart;
