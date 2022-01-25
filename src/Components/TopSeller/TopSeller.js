import React from 'react';
import './_TopSeller.scss'
import girl from '../../images/avt-1.jpg'
import av2 from '../../images/avt-2.jpg'
import av4 from '../../images/avt-4.jpg'
import av5 from '../../images/avt-5.jpg'
import av3 from '../../images/avt-3.jpg'
import av8 from '../../images/avt-8.jpg'
import av6 from '../../images/avt-6.jpg'

function TopSeller() {
    const seller = [
        {
            img: girl,
            text:"Crispin Berry",
            span:"214.2 Eth"
        },
        {
            img: av2,
            text:"Samson Frost",
            span:"205.43 ETH"
        },
        {
            img: av4,
            text:"Tommy Alvarez",
            span:"170.3 Eth"
        },
        {
            img: av5,
            text:"Windsor Lane",
            span:"120.7 Eth"
        },
        {
            img: av3,
            text:"Andy Hurlbutt",
            span:"82.79 Eth"
        },
        {
            img: av8,
            text:"Blake Banks",
            span:"68.2 Eth"
        },
        {
            img: av6,
            text:"Monica Lucas",
            span:"52.8 Eth"
        },
    ]
  return (
        <div className='topseller'>
             <h2>Top Seller</h2>
          <div className='seller_container'>
           {
               seller.map((TopSeller) => (
            
             <div className='for_sellers'>
                 <div className='for_img'>
              <img src={TopSeller.img} />
              <div class="badge">
             </div>
              </div>
             <div className='desciption'>
              <p>{TopSeller.text}</p>
              <span>{TopSeller.span}</span>
              </div>
             </div>
       
       ))
    }
          </div>

          </div>
  )
}

export default TopSeller;
