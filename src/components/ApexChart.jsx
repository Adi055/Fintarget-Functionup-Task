
import React, { useState,useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({data}) => {
  
  const [chartData, setChartData] = useState([])

    const series= [
      {
        data: chartData,
      },
    ]

   const options= {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#008000', // green candles
            downward: '#FF0000', // red candles
          },
        },
      },
    }
    let interval=1*60*3000

  useEffect(()=>{
    let currentTime=new Date().getTime()
    let GetData=data.map((ele,index)=>{
        console.log("index",interval);
        return {
            x:currentTime+index*interval,
            y:[ele.Nifty,ele.Banknifty,ele.Finnifty,Math.random()*19000]
        }
        
       
    })
        
    setChartData(GetData)
    
  },[data,interval])





console.log("map",data);
  return (
    <div >
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
