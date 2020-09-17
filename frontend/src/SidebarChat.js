import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';

function SidebarChat() {
    return (

        <div className="sidebarchat__piece">
            
            {/* Single chat piece contains a photo , name and last message */}
            
            <Avatar />
            <div className="sidebarchat__piece__info">
                <h2>
                    Name
                </h2>

                <p>
                    Last message
                </p>
            </div>

        </div>
    )
}

export default SidebarChat
