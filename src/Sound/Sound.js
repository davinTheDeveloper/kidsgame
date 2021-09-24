import React from "react";
import './Sound.css';
import Data from "../Data/Data";

function Sound() {

    let matchWord = document.getElementById('answerWord').innerHTML;

    const AnswerMatch = (Data.filter((info) => Object.values(info) === matchWord));

        console.log(AnswerMatch);
        return AnswerMatch;
}

    export default Sound;