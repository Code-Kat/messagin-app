import React from 'react';
import "./css/Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerLeft">
                    <IconButton>
                        <DonutLargeIcon className="sidebar__donutIcon"/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon className="sidebar__chatIcon"/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon className="sidebar__moreVertIcon" />
                    </IconButton>
                </div>
                <Avatar src="https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg"/>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined className="sidebar__searchOutlined" />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
        </div>
        
    );
}

export default Sidebar;
