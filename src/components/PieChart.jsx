import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const chartData = {
    series: [30, 15, 20, 10, 25, 12, 8],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Red', 'Cyan', 'Purple', 'White', 'Green', 'Yellow', 'Lemon Green'],
      colors: ['#FF0000', '#00FFFF', '#800080', '#FFFFFF', '#008000', '#FFFF00', '#32CD32'],
      dataLabels: {
        enabled: false, // Disable labels
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false, // Disable percentages
            },
            size: '85%', // Adjust the size of the doughnut chart
          },
        },
      },
      legend: {
        show: false, // Disable the legend
      },
      stroke: {
        width: 0, // Remove the white border
      },
    },
  };

  return (
    <div className='md:mt-10 md:w-[100%] md:ml-0 ml-5  w-[90%] relative'>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        // width="200"
        
      />
      <p className='absolute md:top-10 top-[85px] text-white font-semibold md:left-14 left-[110px] text-center '>
        07 <br /> INDUSTRIES
      </p>
    </div>
    
  );
};

export default PieChart;
