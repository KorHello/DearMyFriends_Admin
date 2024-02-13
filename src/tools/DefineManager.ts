import React from "react";

export const ApiType =  {
    LOCAL : "http://10.20.10.111:6501/",
    DEV : "http://app.devhouse.store:16502/",
    PRODUCTION : "https://app.devhouse.store:16501/"
} as const ;

export const PathType =  {
    GET_ALLSENTENCE: "stn/getAllSentences.dmfap",
    SEND_AUTHNUM: "mem/sendAuthNum.dmfap",
    CHECK_AUTHNUM: "mem/checkAuthNum.dmfap",
    ADD_SENTENCE: "stn/addSentence.dmfap"
} as const