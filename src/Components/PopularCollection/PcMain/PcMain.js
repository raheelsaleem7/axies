import React from 'react';
import './_PcMain.scss'
import avt1 from '../../../images/avt-1.jpg'
import avt8 from '../../../images/avt-8.jpg'
import avt7 from '../../../images/avt-7.jpg'
import card from '../../../images/collection.jpg'
import card2 from '../../../images/collection2.jpg'
import card3 from '../../../images/collection3.jpg'
import card4 from '../../../images/collection4.jpg'
import img10 from '../../../images/img-collection23.jpg'
import img11 from '../../../images/img11.jpg'
import img12 from '../../../images/img-12.jpg'
import img13 from '../../../images/img13.jpg'
import img14 from '../../../images/img14.jpg'
import img15 from '../../../images/img15.jpg'
import img16 from '../../../images/img16.jpg'
import img17 from '../../../images/img17.jpg'

function PcMain() {
    const collection = [
        {
           img: avt1 ,
           h4:"Creative Art Collection",
           span:"Created by",
           p:"Ralph Garraway",
           number:"100",
           card:card,
           card2:card2,
           card3:card3,
           card4:card4,
        },
        {
            img: avt8 ,
            h4:"Color Abstract",
            span:"Created by",
            p:"Mason WoodWard",
            number:"100",
            card:img10,
            card2:img11,
            card3:img12,
            card4:img13,
         },
         {
            img: avt7 ,
            h4:"Moder Art Collection",
            span:"Created by",
            p:"Freddie Carpenter",
            number:"100",
            card:img14,
            card2:img15,
            card3:img16,
            card4:img17,
         },
    ]
  return (
       <div className='pcmain'>
         <div className='pc-main-container'>
          {
              collection.map((PcMain) => (

            
          <div className='collection-content'>
        
          <div className='inner_collection'>
          <div className='for_img'>
            <img src = {PcMain.img} />
          </div>
          <div className='badge'>
          </div>

          <div className='for_text'>
            <div className='creative'>
              <h4>{PcMain.h4}</h4>
            </div>
            <div className='ralph'>
             <span>{PcMain.span}</span>
             <p>{PcMain.p}</p>
            </div>
          </div>
          
          <div className='health'>
                      <div className='heart-icon'>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                      </div>
                      <div className='number'>
                      <p>{PcMain.number}</p>
                      </div>
                  </div>

          </div>

          <div className='for_picture'>
              <div className='left_img'>
               <img src={PcMain.card} />
              </div>

              <div className='right_img'>
                
                <div className='top_img'>
                  <div className='inner_img'>
                  <img src ={PcMain.card2} />
                  </div>
                  <div className='inner_img'>
                  <img src ={PcMain.card3} />
                  </div>
                </div>
                <div className='inner_img2'>
                  <img src ={PcMain.card4} />
                  </div>
              </div>

          </div>



          </div>
            ))
        }
         </div>
       </div>
  );
}

export default PcMain;
