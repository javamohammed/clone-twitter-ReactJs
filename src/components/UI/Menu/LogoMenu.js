import React from 'react'

const LogoMenu = props=> {
    return (
        <a href="/" className="menu-item-logo">
            <img src={props.src} className="ml-1 mr-1 image-logo-item" alt=""   />
        </a>
    )
}

export default LogoMenu