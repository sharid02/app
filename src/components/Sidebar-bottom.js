import React from 'react'
import './Sidebar-bottom.css'

//for sidebar bottom in Sidebar-left component
function SidebarBottom({ Icon ,title,  color}) {
    return (
        <div>
           <div className="sidebar-bt">
            <Icon fontSize="large" style={{color:color}}/>
            <h4>{title}</h4>

           </div>
        </div>
    )
}



export default SidebarBottom

