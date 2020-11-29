import React, { useState, useEffect } from "react";
import Button from '../../../components/Button';

const LifeCycleDemo = () => {
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    console.log("useEffect Run");
    return () => {

    }
  });
  return (
    <div className="container">
      <h1>Play Ground - Life Cycle - React Hooks</h1>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Counter Add</button>
      <p>{counter}</p>
      <button onClick={() => {
        setVisible(false)
      }}>Hide button</button>
      {
        visible && <Button />
      }
    </div>
  )
}

export default LifeCycleDemo;
