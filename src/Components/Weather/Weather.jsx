import React, { useEffect, useState } from 'react';
import "../City/city.css";


const Weather = () => {


    return (
        <div href="#" className="p-6 bg-[#444444] rounded-xl box-shadow text-center col-span-2 grid grid-cols-3">
            <div className='font-extrabold flex flex-col items-center justify-center'>
            <h1 className='text-[80px]'>24°C</h1>
            <h3><span className='text-[20px]'>Feels like:</span> <span className='text-[32px]'>22°C</span></h3>
            </div>
            <div className='font-extrabold flex flex-col items-center justify-center'>
            <img src="../../public/Image/cloudy.png" alt="" className='w-[200px]'/>
            <h3 className='text-[32px]'>Sunny</h3>
            </div>
            <div className='font-extrabold flex flex-col items-center justify-center gap-3'>
            <div className='flex items-center  gap-8'>
                <figure><img src="../../public/Image/humidity 1.png" alt="" /> <figcaption>22 %</figcaption></figure>
                <figure><img src="../../public/Image/wind 1.png" alt="" /> <figcaption>6.69 m/s</figcaption></figure>
            </div>

            <div className='flex items-center  gap-8'>
                <figure><img src="../../public/Image/pressure-white 1.png" alt="" /> <figcaption>pressure</figcaption></figure>
                <figure><img src="../../public/Image/eye.png" alt="" /> <figcaption>6.69 m/s</figcaption></figure>
            </div>
            </div>

        </div>
    );
};

export default Weather;
