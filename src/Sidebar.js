import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";

const Sidebar = () => {


    const recentItem=(topic) => (

        <div className="sidebar__recentItem">
        <span
            className="sidebar__hash">#
        </span>
        <p>{topic}</p>

        </div>

    );
    return (
        <div className="sidebar">
        <div className="sidebar__top">
        <img src=" https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <Avatar className="sidebar__avatar"/>
        <h2>Ataur Rehman</h2>
        <h4>rehmangour04@gmail.com</h4>

        </div>

        <div className="sidebar__stats">
        <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">2,543</p>
        </div>

            <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2,448</p>


            </div>
        </div>
        <div className="sidebar__bottom">
        <p>Recent</p>
           {recentItem("reactjs")}
           {recentItem("programming")}
           {recentItem("softwareengineering")}
           {recentItem("codewithrehman")}
           {recentItem("developer")}

        </div>
        </div>
            
    );
};
 
export default Sidebar;
