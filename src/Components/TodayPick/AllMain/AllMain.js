import React from 'react';
import TodayPick from '../PickHeader/TodayPick';
import PickMain from '../PickMain/PickMain';
import './_Allmain.scss'

function AllMain() {
  return (
     <div className='all-main'>
          <TodayPick />
          <PickMain />
     </div>
  );
}

export default AllMain;
