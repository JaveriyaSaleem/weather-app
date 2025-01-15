import React, { useEffect, useState } from 'react';
import "../City/city.css";


const Weather = (props) => {


    return (
        <div href="#" className="bg-[#444444] rounded-xl box-shadow flex flex-col justify-between md:flex-row py-5 w-full sm:max-w-screen-lg sm:py-5 h-[600px] md:h-96 px-5">
            <div className='font-extrabold flex flex-col items-center justify-center'>
            <h1 className='text-[60px] md:text-[80px]'>{props.temp}</h1>
            <h3><span className='text-[20px] md:text-[20px]'>Feels like:</span> <span className='text-[22px] md:text-[32px]'>{props.feelsLike}</span></h3>
            </div>
            <div className='font-extrabold flex flex-col items-center justify-center'>
            <img src="../../public/Image/cloudy.png" alt="" className='w-[200px]'/>
            <h3 className='text-[32px]'>{props.main}</h3>
            </div>
            <div className='font-extrabold flex flex-col items-center justify-center gap-3'>
            <div className='flex items-center  gap-8'>
                <figure><img src="../../public/Image/humidity 1.png" alt="" /> <figcaption>{props.humidity}</figcaption></figure>
                <figure><img src="../../public/Image/wind 1.png" alt="" /> <figcaption>{props.wind} m/s</figcaption></figure>
            </div>

            <div className='flex items-center  gap-8'>
                <figure><img src="../../public/Image/pressure-white 1.png" alt="" /> <figcaption>{props.
pressure
}</figcaption></figure>
                <figure><img src="../../public/Image/eye.png" alt="" /> <figcaption>{props.visibility} m/s</figcaption></figure>
            </div>
            </div>

        </div>
    );
};

export default Weather;
