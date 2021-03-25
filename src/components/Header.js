import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import CameraIcon from '@material-ui/icons/Camera';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../user/UserSlice';
import { auth } from '../firebase';
function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const logOutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header-left">
                <img 
                src="./logo.png" alt=""
                />
                <div className="header_search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header-right">
                <HeaderOption Icon={HomeOutlinedIcon} color="white" />
                <HeaderOption Icon={VideoLibraryIcon} color="white"/>
                <HeaderOption Icon={CameraIcon} color="white"/>
                <HeaderOption Icon={SupervisorAccountIcon} color="white" onClick={logOutOfApp}/>
            </div>
        </div>
    )
}

export default Header
