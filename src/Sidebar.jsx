import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { IoIosMicrophone } from "react-icons/io";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <IoIosMicrophone className='icon_header'/> 
          <span>MOCKMATE</span>
          <img src="https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Picture" className="profile-picture" />
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillArchiveFill className='icon'/> Past Interviews
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGrid3X3GapFill className='icon'/> Upcoming Interviews
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon'/> Interviewers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsListCheck className='icon'/> Interview Questions
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon'/> Interview Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon'/> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;