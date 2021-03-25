import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../user/UserSlice'
import "./Sidebar-left.css"
import ExploreIcon from '@material-ui/icons/Explore';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import GroupIcon from '@material-ui/icons/Group';
import TimelineIcon from '@material-ui/icons/Timeline';
import MovieFilterRoundedIcon from '@material-ui/icons/MovieFilterRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarBottom from './Sidebar-bottom'
function Sidebar() {
    
    const user = useSelector(selectUser)
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <Avatar src={user.email[0]} className="sidebar-avatar"/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

                <div className="sidebar-static">
                    <div className="sidebar-stat">
                        <p>102</p>
                        <span>Post all</span>
                    </div>
                    <div className="sidebar-stat">
                        <p>106</p>
                        <span>1.M</span>
                    </div>
                    <div className="sidebar-stat">
                        <p>20</p>
                        <span>Following</span>
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom">
                <div className="sidebar-bt-option">
                    <SidebarBottom Icon={ExploreIcon} color="#10d6b6" title= "Explore"/>
                    <SidebarBottom Icon={LocalCafeIcon} color="#7d7d7d" title= "Stories"/>
                    <SidebarBottom Icon={NotificationsNoneIcon} color="#f4c319" title= "Notification"/>
                    <SidebarBottom Icon={GroupIcon} color="#ef219b" title= "Group"/>
                    <SidebarBottom Icon={TimelineIcon} color="#fa4532" title= "Feeds"/>
                    <SidebarBottom Icon={MovieFilterRoundedIcon} color="#c80000" title= "Videos"/>
                    <SidebarBottom Icon={SettingsIcon} color="#74beff" title= "Settings"/>
                
                </div>
            </div>
        </div>
    )
}

export default Sidebar
