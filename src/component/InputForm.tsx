import React from "react";
import "../css/Component.css"

function InputForm(props: any) {
    const onChange = (e: { target: any; }) => {
        props.inputTxt(e.target.value)
    }

    return (
        <li className="inputFormMain">
            <ul className="inputFormBox">
                <li>{props.title}</li>
                <li><input type="text" onChange={onChange}/></li>
            </ul>
        </li>
    )
}

export default InputForm;