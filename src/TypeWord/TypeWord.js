import React, { useState } from "react";
import Confetti from "../Components/Confetti/Confetti";
import './TypeWord.css';


//parent component
function TypeWord() {

    //check user's spelling
     const SpellCheck = (e) => {
         e.preventDefault();
        let answer = document.getElementById('answerWord').innerHTML;
        let userAnswer = document.getElementById('userInput').value;
        console.log(userAnswer);
        console.log(answer);

        if (answer === userAnswer) {
            document.getElementById('userInput').style.backgroundColor = "lightgreen";
            Confetti();
            document.getElementById('nextWord').style.display = 'block';
            document.getElementById('x34').style.display = 'none';
        } else {
            alert('try again');
        }
    };
   
    return (
        <div id="spell">
        <fieldset className="fix">
        <br />
            <form className="SpellWord">
            <br />
            <input type="text" id="userInput"></input>
            </form>
            <br />
            <div className="btnCenter">
            <button id="x34" className="checkBtn" type="submit" onClick={SpellCheck}>Check!</button>
            <button id="nextWord"><a href="/" id="resetBtn">Play again!</a></button>
            </div>
            </fieldset>
        </div>
    )
};
export default TypeWord;
