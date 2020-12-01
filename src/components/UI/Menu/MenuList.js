import React from 'react'
//import { BrowserRouter } from "react-router-dom";
import Item from './Item'
import LogoMenu from './LogoMenu'

const MenuList = () => {
    return (
        <div className="col-sm menu-left left-div">
            <LogoMenu src="images/icons_1/twitter_logo.svg"  />
            
                <Item src="images/icons_1/accueil.svg" label="Accueil" to="/" />
                <Item src="images/icons_1/explorer.svg" label="Explorer"  to="/explorer"  />
                <Item src="images/icons_1/notifications.svg" label="Notifications" to="/notifications" />
                <Item src="images/icons_1/messages.svg" label="Messages" to="/messages" />
                <Item src="images/icons_1/signets.svg" label="Signets" to="/signets" />
                <Item src="images/icons_1/lists.svg" label="Lists"  to="/lists" />
                <Item src="images/icons_1/profil.svg" label="Profil" to="/profile" />
                <Item src="images/icons_1/plus.svg" label="Plus" to="/" />
            
        </div>
    )
}

export default MenuList