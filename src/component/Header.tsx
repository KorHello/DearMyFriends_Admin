import React from "react";
import '../css/header.css'

function Header(props: any) {
    return (
        <div className="headerBox">
            <h1 className="headerTitle">:: {props.title} ::</h1>
            <h3 className="subTitle">{props.subTitle}</h3>
        </div>
    )
}

export default Header;