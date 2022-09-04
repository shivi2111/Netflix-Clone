import React, { useState } from "react";
import "./FifthScreen.css";
import Question from "./Question";
import questionData from "./questionData.json";

export default function FifthScreen() {
  const [active, setActive] = useState(null);
  function clickHandler(index) {
    if (active === index) return setActive(null);
    setActive(index);
  }
  return (
    <div className="faq-main">
      <h1>Frequently Asked Questions</h1>
      <div className="questions">
        {questionData.map((obj, index) => {
          return (
            <Question
              isOpen={active !== null && active === index ? true : false}
              index={index}
              {...obj}
              clickHandler={clickHandler}
            />
          );
        })}
      </div>
      <div className='content'>
        <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
        <div className='sumit'>
        <input className='em' type={'email'} placeholder = ' Email address'></input>
        <button className='bt button'>Get Started  &gt;</button>
        </div>
    </div>

    </div>
  );
}
