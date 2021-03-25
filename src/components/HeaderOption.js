import React from 'react'
import './HeaderOption.css'

function HeaderOption({Icon ,title, onClick, color}) {
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon fontSize="large" style={{ color:color}} className="headerOption_icon"/>}
            <h4>{title}</h4>
        </div>
    )
}

export default HeaderOption;
