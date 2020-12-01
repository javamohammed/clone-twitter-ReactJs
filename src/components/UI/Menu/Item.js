import React from 'react'
import { Link } from "react-router-dom";
const Item = props=> {
    return (
        <Link to={props.to} className="menu-item" >
                 <img src={props.src} className="ml-1 mr-1" alt=""  /> {props.label}
        </Link>
    )
}

export default Item