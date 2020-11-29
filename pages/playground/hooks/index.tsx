import React, { useState, useEffect } from "react";
import Button from '../../../components/Button';

const LifeCycleDemo = () => {
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
  // useEffect(() => {
  //   console.log("useEffect Run");
  //   return () => {
  //     // componentWillUnmount sẽ bị remove khỏi cấu trúc.

  //   }
  // });

  useEffect(() => {
    // Chạy 1 lần duy nhất sau khi render lần đầu tiên.
    console.log("useEffect - empty deps");
  },[])

  useEffect(() => {
    // Chạy 1 lần duy nhất sau khi render lần đầu tiên.
    console.log("useEffect - counter");
  },[counter])

  useEffect(() => {
    // Chạy 1 lần duy nhất sau khi render lần đầu tiên.
    console.log("useEffect - visible");
  },[visible])

  useEffect(() => {
    // Chạy 1 lần duy nhất sau khi render lần đầu tiên.
    console.log("useEffect - visible-counter");
  },[counter,visible])

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
