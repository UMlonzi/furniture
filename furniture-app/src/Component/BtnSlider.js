import React from 'react'
import '../Css/Slider.css';
import leftArrow from '../icons/download.png';
import rightArrow from '../icons/right-arrow.svg';
export default function BtnSlider() {
  return (
    <button className='btn-slider'>
    <img src={leftArrow}/>
    </button>
  )
}
