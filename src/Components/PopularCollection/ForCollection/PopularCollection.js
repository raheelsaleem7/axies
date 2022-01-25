import React from 'react';
import './_PopularCollection.scss'
import PcHeader from '../PcHeader/PcHeader';
import PcMain from '../PcMain/PcMain';

function PopularCollection() {
  return (
       <div className='main'>
           <PcHeader />
           <PcMain />
       </div>
  );
}

export default PopularCollection;
