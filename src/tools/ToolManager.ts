import React from "react";
import axios from "axios";
import {ApiType} from "./DefineManager";

const apiMode = "DEV"
export function postCall(urlPath: String, dataBody: any, act: any) {
    var callUrl = ApiType[apiMode] + urlPath
    axios.post(callUrl, dataBody, {
        headers: {
            "Content-Type": "application/json",
            "osType": "W",
            "contentInfo": "AdminWebCall"
        }
    }).then((response) => {
        if(response.data.code === "0000") {
            act(response.data.body)
        } else {
            alert(response.data.msg)
        }
    })
        .catch((response) => {console.log('Error!') });
}