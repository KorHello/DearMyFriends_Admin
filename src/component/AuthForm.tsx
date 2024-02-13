import React, {useState} from "react";
import '../css/AuthForm.css'
import * as ToolManager from '../tools/ToolManager';
import {PathType} from "../tools/DefineManager";
import {useNavigate} from "react-router-dom";

function AuthForm() {
    const [idValue, setId] = useState("")
    const [authNum, setAuthNum] = useState("")
    const [checkInput, setInputState] = useState(false)
    const movePage = useNavigate()

    const inputAdminId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value)
    }

    const inputAuthNum = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuthNum(event.target.value)
    }

    function authAction() {
        if(!checkInput) {
            // 인증번호 발송전
            if(idValue === "") {
                alert("아이디가 입력되지 않았습니다. 확인 후 다시 시도해주세요.")
            } else {
                ToolManager.postCall(PathType["SEND_AUTHNUM"], {"userId": idValue}, sendAuthNumOk)
            }
        } else {
            // 발송 후
            if(authNum === "" || authNum.length < 6) {
                alert("인증번호 입력 후 다시 시도해주세요.")
            } else {
                ToolManager.postCall(PathType["CHECK_AUTHNUM"], {
                    "userId": idValue,
                    "authNum": authNum
                }, checkAuthNumOK)
            }
        }
    }

    function sendAuthNumOk() {
        setInputState(true)
        alert("인증번호 발송이 완료되었습니다.")
    }

    function checkAuthNumOK() {
        alert("인증이 완료되었습니다.")
        movePage('/main')
    }

    return (
        <div className="formBoxDiv">
            <ul className="formBox">
                <li><input value={idValue} onChange={inputAdminId} disabled={checkInput} type="text" placeholder="아이디 입력"/> </li>
                <li><input value={authNum} onChange={inputAuthNum} type="password" placeholder="인증번호 입력"/> </li>
                <li>
                    <button onClick={authAction}>인증번호 보내기</button>
                </li>
            </ul>
        </div>
    )
}

export default AuthForm;