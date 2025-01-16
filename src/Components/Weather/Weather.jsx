import React, { useEffect, useState } from 'react';
import "../City/city.css";
import Cloudy from "../../assets/img/cloudyy.png"
import eye from "../../assets/img/eye.png"
import humidity from "../../assets/img/humidity.png"
import pressure from "../../assets/img/pressure.png"
import wind from "../../assets/img/wind-1.png"


const Weather = (props) => {


    return (
        <div href="#" className="bg-[#444444] rounded-xl box-shadow flex flex-col justify-between md:flex-row py-5 w-full sm:max-w-screen-lg sm:py-5 h-[600px] md:h-96 px-5">
            <div className='font-extrabold flex flex-col items-center justify-center'>
            <h1 className='text-[60px] md:text-[80px]'>{props.temp}</h1>
            <h3><span className='text-[20px] md:text-[20px]'>Feels like:</span> <span className='text-[22px] md:text-[32px]'>{props.feelsLike}</span></h3>
            </div>
            <div className='font-extrabold flex flex-col items-center justify-center'>
            <img src={Cloudy} alt="img" className='w-[200px]'/>
            <h3 className='text-[32px]'>{props.main}</h3>
            </div>
            <div className='font-extrabold flex flex-col items-center justify-center gap-3'>
            <div className='flex items-center  gap-8'>
                <figure><img src={humidity} alt="img" /> <figcaption>{props.humidity}</figcaption></figure>
                <figure><img src={wind} alt="img" /> <figcaption>{props.wind} m/s</figcaption></figure>
            </div>

            <div className='flex items-center  gap-8'>
                <figure><img src={pressure} alt="img" /> <figcaption>{props.
pressure
}</figcaption></figure>
                <figure><img src={eye} alt="img" /> <figcaption>{props.visibility} m/s</figcaption></figure>
            </div>
            </div>

        </div>
    );
};

export default Weather;
