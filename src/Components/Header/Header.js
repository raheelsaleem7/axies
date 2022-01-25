import React,{useState} from 'react'
import './_Header.scss'
import logo from '../../images/logo_dark.png'
import moon from '../../images/moon-2.png'

function Header() {
    const [toggleState, setToggleState] = useState (false);
   
    const toggleStep = (index) => {
        if(toggleState) {
            setToggleState(false)
        } else {
            setToggleState(true)
        }
    }
    function getData () {
        alert ("")
    }
    return (
        <div className='header'>
            <div className='header_container'>
                <div className='logo'>
                    <img src= {logo} />
                  </div>

                <div className='dropdown'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Explore</a></li>
                        <li><a href='#'>Activity</a></li>
                        <li><a href='#'>Community</a></li>
                        <li><a href='#'>Pages</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>  
              
              <div className='search'>
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
              </div>

              <div className='btn'>
                  <div className="for_icon">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wallet"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>
                  </div>

             <button>Wallet Connect</button>
              </div>    
              
            
            <div className='icon'>
             <div className="for_icon">
             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>
                 </div>    

                 <div className="for_icon2">
                 <img src={moon} />
                 </div>        
            </div>
            <div className='announcement_header'>
          
           <div className='menu_bar'  onClick= {() => toggleStep() }>
               <span></span>
               <span></span>
               <span></span>
              </div> 
              <div className ={toggleState === true ? "active-steps" : "not-active"} > 
             
            </div>
               </div>
            </div>
            </div>

      
    )
}

export default Header
