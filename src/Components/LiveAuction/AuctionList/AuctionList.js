import React from 'react'
import './_AuctionList.scss'
import oldman from '../../../images/avt-11.jpg'
import avt from '../../../images/avt-12.jpg'
import avt2 from '../../../images/avt-13.jpg'
import avt3 from '../../../images/avt-14.jpg'
import avt4 from "../../../images/card-item8.jpg"
import avt5 from "../../../images/avt5.jpg"
import avt6 from "../../../images/avt6.jpg"
import avt7 from "../../../images/avt7.jpg"

function AuctionList() {
    const auction = [
        {
          number:"100",
          time:"5:33:33:21",
          heading:"Hamlet Contemplates...",
          bsc:"BSC",
          creator:"Creator",
          bid:"Current Bid",
          sal:"SalvadorDali...",
          price:"4.89 ETH",
          img:oldman,
          bg: avt4,
        },
        {
            number:"200",
            time:"5:33:33:21",
            heading:"Triumphant Awakenin...",
            bsc:"BSC",
            creator:"Creator",
            bid:"Current Bid",
            sal:"Trista Francis...",
            price:"4.89 ETH",
            img: avt,
            bg: avt5,
          },
          {
            number:"90",
            time:"5:33:33:21",
            heading:"Living Vase 01 By Lan...",
            bsc:"BSC",
            creator:"Creator",
            bid:"Current Bid",
            sal:"Freddie Carpenter",
            price:"4.89 ETH",
            img: avt2,
            bg: avt6,
          },
          {
            number:"145",
            time:"5:33:33:21",
            heading:"Flame Dress'By Balma...",
            bsc:"BSC",
            creator:"Creator",
            bid:"Current Bid",
            sal:"Taylor Covington",
            price:"4.89 ETH",
            img: avt3,
            bg: avt7,
          },
    ]
    return (
        <div className='list-auction'>
            <div className='container'>
                {
                    auction.map((AuctionList) => (

                  
               <div className='content'>
                 <div className='img-content' style={{ backgroundImage: `url(${AuctionList.bg})` }}>
                 
                  <div className='health'>
                      <div className='heart-icon'>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                      </div>
                      <div className='number'>
                      <p>{AuctionList.number}</p>
                      </div>
                  </div>
                 
                  <div className='place-bid'>
                    <div className='wallet'>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wallet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>
                    </div>
                    <div className='bid-btn'>
                     <button>Place Bid</button>
                     </div>   
                   </div>

                <div className='countdown'>
                <div className='fire-svg'>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gripfire"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path  d="M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4.4 3.3.6 6.7.6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z"></path></svg>
               </div>
               <div className='timer'>
               <p>{AuctionList.time}</p>
               </div>
                </div>
                 </div>
               
               <div className='description'> 
                 <div className='hamp'>
                 <h3>{AuctionList.heading}</h3>
                 </div>
                 <div className='bsc'>
                   <span>{AuctionList.bsc}</span>
                 </div>
               </div>


               <div className='holder'>
                
                <div className='old-man'>
                <img src={AuctionList.img} />
                </div>

               <div className='for_custom'>

               <div className='creation'>
                 <div className='creator'>
                     <p>{AuctionList.creator}</p>
                 </div>
                 <div className='sal'>
                     <p>{AuctionList.sal}</p>
                 </div>
               

               </div>

               <div className='amount'>
               <div className='creator'>
                     <p>{AuctionList.bid}</p>
                 </div>
                 <div className='sal'>
                     <p>{AuctionList.price}</p>
                 </div>

               </div>
            </div>

               </div>

               </div>
  ))
}
            </div>
        </div>
    )
}

export default AuctionList
