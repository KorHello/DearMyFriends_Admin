import React, {useState} from "react";
import InputForm from "../component/InputForm";
import ActionButton from "../component/ActionButton";
import Header from "../component/Header";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import * as ToolManager from "../tools/ToolManager";
import {PathType} from "../tools/DefineManager";

function AddSentence() {
    const [content, setSentenceContent] = useState("")
    const [writer, setSentenceWriter] = useState("")
    const movePage = useNavigate()

    function backAction() {
        movePage("/main")
    }

    function addAction() {
        ToolManager.postCall(PathType["ADD_SENTENCE"], {
            "content": content,
            "writer": writer
        }, addOkAction)
    }

    function addOkAction() {
        alert("등록 완료되었습니다.")
        movePage("/main")
    }

    return (
        <div>
            <Header title="문장 추가하기" subTitle="신규 문장 추가하기"/>
            <ul>
                <InputForm title="문장 입력" inputTxt={setSentenceContent}/>
                <InputForm title="문장 작성자 입력" inputTxt={setSentenceWriter}/>
            </ul>

            <ActionButton btnTitle="뒤로가기" action={backAction}/>
            <ActionButton btnTitle="추가하기" action={addAction}/>
        </div>
    )
}

export default AddSentence;