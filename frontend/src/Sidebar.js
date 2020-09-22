import React from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user},dispatch]=useStateValue();
    return (
        // side bar is the whole left section
        <div className="sidebar">

            {/* sidebar__header -> represents the whole top header of left side */}
            <div className="sidebar__header">

                {/* Avatar is also used by github  as we can see in the link*/}
                <Avatar src={user?.photoURL}/>


                {/* sidebar__header__right -> represents the right box consisting of 3 icons */}
                <div className="sidebar__header__right">

                    {/* DonutLargeIcon for STATUS OF WHATSAPP */}
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    {/* ChatIcon for CHAT OF WHATSAPP */}
                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    {/* MoreVertIcon for SETTINGS OF WHATSAPP */}
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>


            <div className="sidebar__search">
                <div className="sidebar__search__container">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>

            <div className="sidebar__chat__component">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>


        </div>
    )
}

export default Sidebar
