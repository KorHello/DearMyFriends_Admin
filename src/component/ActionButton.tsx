import React from "react";
import "../css/ActionButton.css"

function ActionButton(props: any) {

    return (
        <div>
            <button className="actionBtn" onClick={props.action}>{props.btnTitle}</button>
        </div>
    )
}

export default ActionButton;