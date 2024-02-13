import React from "react";
import Header from "../component/Header";
import ListView from "../component/ListView";
import ActionButton from "../component/ActionButton";
import {useNavigate} from "react-router-dom";

function Main() {
    const movePage = useNavigate()

    function moveWritePage() {
        movePage("/addSentence")
    }

    return (
        <div id="content">
            <Header title="DearMyFriends 관리" subTitle="디어마이 프렌즈 문장관리자"/>
            <ListView />
            <ActionButton btnTitle="문장 추가하기" action={moveWritePage}/>
        </div>
    )
}

export default Main;