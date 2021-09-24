import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './WordChoices.css';
import Data from "../Data/Data";
import Confetti from '../Components/Confetti/Confetti';
import TypeWord from '../TypeWord/TypeWord';

//parent component
function WordChoices() {

    const [btnWord, setBtnWord] = useState(["?", "?", "?", "?", "?"]);
    const [disableChoices, setDisableChoices] = useState(true);
    const [answer, setAnswer] = useState("");
    const [soundDisabled, setSoundDisabled] = useState(true);
    const [changePage, setChangePage] = useState(true);

    let newArr = [];

    //create random list of words
    const handleClick = () => {
        document.getElementById('firstButton').style.display="none";
        document.getElementById('secondButton').style.display="block";
        while (newArr.length < 5) {
            let num = Math.floor(Math.random() * (0, Data.length));
            if (newArr.indexOf(num) === -1) {
                newArr.push(num)
            }
            setDisableChoices(false);
            setBtnWord([Data[newArr[0]], Data[newArr[1]], Data[newArr[2]], Data[newArr[3]], Data[newArr[4]]]);

        }
        winnerWord([Data[newArr[0]], Data[newArr[1]], Data[newArr[2]], Data[newArr[3]], Data[newArr[4]]]);
    };

    // identify answer
    function winnerWord(answerArr) {

        let choice = answerArr[Math.floor(Math.random() * (0, answerArr.length))];
        console.log(choice);
        setAnswer(choice);
        setSoundDisabled(false);
    };

    // check user's answer
    function UserAnswer(event) {

        let userWord = document.getElementById(event.target.id).innerHTML;
        let choice = document.getElementById('answerWord').innerHTML;

        if (userWord === choice) {
            document.getElementById(event.target.id).style.backgroundColor = "lightgreen";
            Confetti();
            document.getElementById('thirdButton').style.display = 'block';
            setChangePage(false);
        } else {
            alert('Try again');
        }
    }
    function displaySpelling() {
        
        document.getElementById('spell').style.cssText = 'display: flex; justify-content: center border-color: none';

      
        document.getElementById('choiceContent').style.display = 'none';
        document.getElementById('thirdButton').style.display = 'none';
        document.getElementById('answerWord').style.color = 'black';

    }


    return (
        <div className="ChoiceContainer">
            <div className="PrimaryButtons">
                <button id="firstButton" type="button" onClick={handleClick}>1. Words</button>
                <button id="secondButton" type="button" onClick={handleClick} disabled={soundDisabled}>2. Listen</button>
                <br />
                <div></div>
                <div>
                <button id="thirdButton" type="button" onClick={displaySpelling}disabled={changePage}>Next </button>
                </div>
                </div>
            <br />
            <div id='answerWord'>{answer}</div>
            <br />
            <div id="choiceContent">
            <br />
            <div className="ChoiceButtons">
                <button disabled={disableChoices} id="choice01" className="Btn" onClick={UserAnswer}>{btnWord[0]}</button>
                <button disabled={disableChoices} id="choice02" className="Btn" onClick={UserAnswer}>{btnWord[1]}</button>
                <button disabled={disableChoices} id="choice03" className="Btn" onClick={UserAnswer}>{btnWord[2]}</button>
                <button disabled={disableChoices} id="choice04" className="Btn" onClick={UserAnswer}>{btnWord[3]}</button>
                <button disabled={disableChoices} id="choice05" className="Btn" onClick={UserAnswer}>{btnWord[4]}</button>
            </div>
        </div>
        <Route>
        <TypeWord />
        </Route>
        </div>
    )
};

export default WordChoices;