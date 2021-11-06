import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
    return (
        <div className='header'>
        <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
        <div className="header__search">
        <SearchIcon/>
        <input type="text"/>

        </div>
        
 
        </div>

           <div className="header__right">
           <HeaderOption Icon={HomeIcon} title="Home"/>
           <HeaderOption  Icon ={SupervisorAccountIcon} title="My Network"/>
           <HeaderOption Icon={BusinessCenterIcon} title="jobs"/>
           <HeaderOption Icon={ChatIcon} title="Messaging" />
           <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
           <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQH1flBFaQa0Bg/profile-displayphoto-shrink_800_800/0/1616954570540?e=1641427200&v=beta&t=EUqCxbn1Qt_2n8Pnu38AG8YXs0_Gw7YIoNaeeC5fubc"  title="me"/>


           </div>            
        </div>
        
    );
}

export default Header;
