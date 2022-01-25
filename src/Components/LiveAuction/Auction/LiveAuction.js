import React from 'react'
import AuctionList from '../AuctionList/AuctionList'
import './_LiveAuction.scss'

function LiveAuction() {
    return (
        <div className='live-auction'>
            <div className='live-container'>
              <div className='live-header'>
              <div className='live'>
              <h2>Live Auctions</h2>
            </div>
            <div className='explore'>
             <p>EXPLORE MORE</p>
            </div>
              </div>
              <AuctionList />
            </div>
            
        </div>
    )
}

export default LiveAuction
