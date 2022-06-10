import React, {useState} from 'react';
import '../Css/Slider.css';
import dataSlider from './dataSlider';
import amosChair from '../Images/pixlr-bg-resultAmos (1).png';
import sofaChair from '../Images/pixlr-bg-result (1).png';
import  kewChair from '../Images/pixlr-bg-relt (3).png';
import  thatChair from '../Images/pixlr-bg-resu.png';
// import BtnSlider from './Component/BtnSlider';

export default function Slider(props) {
  /*const slide = ((val)=> props.scrolls(val));*/
  return (
    <>
    <div className='container-slider'>
      <div>
         <div className='slide'/> 
         <div class="horizontal-scroll">
                <button class="btn-scroll" id="btn-scroll-left" onclick="scrollHorizontally(1)"><i class="fas fa-chevron-left"></i></button>
                <button class="btn-scroll" id="btn-scroll-right" onclick="scrollHorizontally(-1)"><i class="fas fa-chevron-right"></i></button>
                <div class="storys-container">
         <div className='story-circle'>
          <div>     
            <div className='colorb1'>
                       
           <div className='wordsb1'>
                          
            <img className='imgSlider'   src={amosChair} alt="amosChair"/>
                            <p>Amos Chair</p>
                            <h4>R480</h4>
                            

            </div>
                        
                        </div>
                    </div>
           
         
          </div>
          <div className='story-circle'>
          <div>     
            <div className='colorb2'>
                       
           <div className='wordsb1'>
                          
            <img className='imgSlider'   src={sofaChair} alt="sofaChair"/>
                            <p>Sofa Chair</p>
                            <h4>R390</h4>
                            

            </div>
                        
                        </div>
                    </div>
           
         
          </div>
          <div className='story-circle'>
          <div>     
            <div className='colorb3'>
                       
           <div className='wordsb1'>
                          
            <img className='imgSlider'   src={kewChair} alt="kewChair"/>
                            <p>Kew Chair</p>
                            <h4>R160</h4>
                            

            </div>
                        
                        </div>
                    </div>
           
         
          </div>
          <div className='story-circle'>
          <div>     
            <div className='colorb4'>
                       
           <div className='wordsb1'>
                          
            <img className='imgSlider'   src={thatChair} alt="thatChair"/>
                            <p>Kew Chair</p>
                            <h4>R400</h4>
                            

            </div>
                        
                        </div>
                    </div>
           
         
          </div>
        </div>
        </div>
        </div>
      <btnSlider/>
      <btnSlider/>
    </div>
    </>
  )
}
