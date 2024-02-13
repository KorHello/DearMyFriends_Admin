import React, {useEffect, useState} from "react";
import '../css/ListView.css'
import * as ToolManager from '../tools/ToolManager';
import {PathType} from "../tools/DefineManager";

function ListView() {
    const [sentences, changeArray] = useState([{
        idx: "",
        content: "",
        writer: "",
        likeCnt: ""
    }])

    const rendering = () => {
        const result = [];
        for(let i = 0; i < sentences.length; i++) {
            result.push(<tr>
                <td>{sentences[i].idx}</td>
                <td>{sentences[i].content}</td>
                <td>{sentences[i].writer}</td>
                <td>{sentences[i].likeCnt}</td>
            </tr>)
        }

        return result;
    }

    useEffect(() => {
        ToolManager.postCall(PathType["GET_ALLSENTENCE"], null, changeArray)
    }, [])

    return (
        <div>
            <table className="listTBMain">
                <thead>
                <tr>
                    <th className="thCnt">idx</th>
                        <th className="thTitle">content</th>
                        <th className="thWriter">writer</th>
                        <th className="thCnt">likeCount</th>
                    </tr>
                </thead>
                <tbody>
                {rendering()}
                </tbody>
            </table>
        </div>
    )
}

export default ListView