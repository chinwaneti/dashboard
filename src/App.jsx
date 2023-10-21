import React from 'react';
import {  FaSignOutAlt, FaArrowRight, FaArrowUp, FaApple } from 'react-icons/fa';
import {BiSolidTime, BiWalletAlt , BiBarChartAlt, BiPlus, BiSun, BiCaretDown, BiBell, BiDollarCircle} from "react-icons/bi"
import VerticalBarChart from './components/VerticalBarChart';
import stock from "./images/stock.png"
import PieChart from './components/PieChart';

export default function InvestmentDashboard() {

  return (
    <div className=' relative bg-gray-200 h-[160vh]'>
      <div className="flex bg-gray-50 border-[15px] border-white rounded-3xl w-[90%] h-[130vh]  absolute top-[12%] left-[5%] p-3">
        
        <aside className="rounded-l-3xl text-black w-64 flex-shrink-0 text-sm font-semibold p-4">
          <div className=" mb-28 flex space-x-3 items-center ">
          <img src="https://img.freepik.com/premium-photo/beautiful-woman-face-with-red-circle-dark-background-vector-illustration_934652-5616.jpg?size=626&ext=jpg&ga=GA1.1.1685298518.1695204527&semt=ais" alt="pica" className='w-[20%] rounded-lg'/>
          <p>Kristen Ramos <br /> <p className='text-xs'>kristenramos@email.com</p> </p>
          </div>
          <ul className="space-y-10">
            <li className="flex items-center space-x-2">
              <BiSolidTime size={24} />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-2">
              <BiWalletAlt size={24} />
              <span>Holdings</span>
            </li>
            <li className="flex items-center space-x-2">
              <BiBarChartAlt size={24} />
              <span>Performance</span>
            </li>
           
          </ul>
        </aside>

        {/* Main Content */}
        <main className=" flex rounded-rl-3xl h-[45%] relative rounded-bl-3xl mt-0 rounded-tr-lg w-[80%] bg-gray-200">
          <div className='ml-[340px] mt-7'> <p className='flex text-xs text-gray-400 items-center space-x-10'><span><BiSun size={25}/></span> US stock market opens in 3 hours<p className='font-bold flex items-center text-black'>Main Wallet <span> <BiCaretDown /></span><span className='ml-5 text-black'><BiBell size={20}/></span> <span className='rounded-full p-2 ml-10 bg-black'><BiPlus size={20} style={{color:"white"}}/></span></p></p>  </div>
          <div className="bg-white rounded-3xl p-4 ml-[5%] h-[40vh] mt-32 shadow-md absolute w-[27%]">
            <h2 className="text-lg font-semibold">Upgrade your account</h2>
              <p className="text-gray-400 text-sm font-semibold w-[69%] text-left ml-16">Access many other feature and helpful insights</p>
            <div className=" flex items-center justify-between space-x-10 ">
            <div className=''> 
              <img src="https://img.freepik.com/premium-vector/adolescent-boy-looking-smartphone-semi-flat-color-vector-character_151150-7492.jpg?size=626&ext=jpg&ga=GA1.1.1685298518.1695204527&semt=ais" loading='lazy' alt="pix" className='w-[100%] '/>
            </div>
            <div className='bg-blue-950 rounded-lg w-10  p-2 h-10 px-3'>
            <FaArrowRight style={{color: "white"}}/>
            </div></div>
          </div>

          <div className="bg-white rounded-3xl p-4 absolute mt-32 shadow-md ml-[35%] h-[40vh] w-[60%]">
            <div className='flex items-center space-x-3 text-xs'>
              <p className='rounded-lg border-black border-2 p-1'>1d</p>
              <p className='text-gray-400'>1w</p>
              <p className='text-gray-400'>1m</p>
              <p className='text-gray-400'>1y</p>
              <p className='text-gray-400'>All</p>
              <p className='w-[70%]'></p>
              
              <div className='ml-32'><BiDollarCircle size={20}/></div>
            </div>
            <div className='absolute top-0'>
              <VerticalBarChart />
            </div>
          </div>
        </main>
      </div>

      
      <div className='absolute top-[53%] left-[28%] ml-10 '>
        <div className='flex justify-between font-semibold pt-5 py-2'>
        <p>
          Portfolio History
        </p> <p className='underline '>Per Industry</p></div>
        <div className='flex space-x-4   '>
          <div className='rounded-3xl bg-white w-40 h-60 border-2'><p className='font-bold ml-4 my-2'>NOV 19</p><p></p>
          <div className='mt-28 p-3 text-center'>
        <p>Portfolio Value 
        </p>
           <p className='font-semibold text-xl'>$ 986.34</p> 
        <div className='flex items-center space-x-2 text-xs ml-4 text-cyan-400' >
            <FaArrowUp size={10}/> <p>234.33 (30.80%)</p> 
        </div>
      </div>
           </div>
          <div className='rounded-3xl bg-gray-100 w-40 h-60 border-2'><p className='font-bold ml-4 my-2'>OCT 19</p> <img src={stock} alt="pics" className='w-24 mx-auto h-20'/><p></p>
          <div className='mt-10  text-center  '>
        <p>Portfolio Value 
        </p>
           <p className='font-semibold text-xl'>$ 986.34</p> 
        <div className='flex items-center space-x-2 text-xs ml-4 text-cyan-400' >
            <FaArrowUp size={10}/> <p>234.33 (30.80%)</p> 
        </div>
      </div>
          </div>
         
          <div className='rounded-3xl bg-white w-40 h-60 border-2'><p className='font-bold ml-4 my-2'>SEPT 19</p><p></p>
          <div className='mt-[130px]  text-center '>
        <p>Portfolio Value 
        </p>
           <p className='font-semibold text-xl'>$ 986.34</p> 
        <div className='flex items-center space-x-2 ml-4 text-xs text-red-600' >
            <FaArrowUp size={10}/> <p>-234.33 (-8.80%)</p> 
        </div>
      </div>
          </div><div className='bg-blue-600 rounded-3xl w-52  h-60 '>
            
         <PieChart />
</div>

        </div>
      
    </div>
    <div className='absolute top-[87%] left-[110px]'>
    <li className="flex items-center space-x-2">
              <FaSignOutAlt size={24} />
              <span>Logout</span>
            </li>
    </div>
    <div className='grid grid-cols-8 gap-5 absolute top-[87%] left-[32%] text-xs '>
      <div className=''> <p className='text-[10px]'>SYMBOL</p>  <span className='flex items-center space-x-2 border-l-4 border-green-600 '><span className='rounded-full bg-gray-200 ml-2 p-1'><FaApple /></span> <p>AAPL</p> </span></div>
      <div> <p className='text-[10px]'>PRICE</p>  <p   className='font-bold'>= $ 234.00</p></div>
      <div> <p className='text-[10px]'> % RETURN</p> <p className='text-green-600 font-bold '>$ 45.43</p></div>
      <div> <p className='text-[10px]'>TOTAL NET COST</p>  <p  className='font-bold'>$ 1234.00</p></div>
      <div> <p className='text-[10px]'>MARKET VALUE</p>  <p  className='font-bold'>$ 1345.87</p></div>
      <div> <p className='text-[10px]'>TOTAL GAIN</p>  <p className='text-green-600 font-bold'>$ 456.34</p></div>
      <div> <p className='text-[10px]'>DAILY GAIN</p>  <p  className='font-bold'> - $ 3.45</p></div>
      <div> <p className='text-[10px]'>%PORTFOLIO </p> <p  className='font-bold'>13.45%</p></div>
    </div>
    </div>
  );
}
