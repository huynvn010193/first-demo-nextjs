import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Button from '../../../components/Button';
import useConstructor from "../../../custom-hooks/useConstructor";

let isRun = false;
const LifeCycleDemo = () => {
  // Các cách tạo constructor
  // Cách 1:
  if(isRun === false) {
    console.log("constructor cách 1");
    isRun = true;
  }

  // Cách 2
  const isRunHook = useRef(false);
  if(isRunHook.current === false) {
    console.log("constructor cách 2");
    isRunHook.current = true;
  }

  // Cách 3
  useMemo(() => {
    console.log("constructor cách 3");
  },[]);

  useConstructor(() => {
    console.log("constructor cách 4");
  })

  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
  const inputFileEl = useRef(null);
  const [user,setUser] = useState({
    firstName: 'John',
    lastName: 'Smith',
  })
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

  const fullName = useMemo(() => {
    return user.firstName + '' + user.lastName;
  },[user]);

  const handleIncreaseCounter = useCallback(() => {
    setCounter(counter + 1);
  },[counter]);

  return (
    <div className="container">
      <h1>Play Ground - Life Cycle - React Hooks {fullName}</h1>
      <button onClick={handleIncreaseCounter}>Counter Add</button>
      <p>{counter}</p>
      <button onClick={() => {
        setVisible(false)
      }}>Hide button</button>
      {
        visible && <Button />
      }
      <hr />
      <input 
        style={{ 
          opacity: 0, 
          visibility: 'hidden',
          position: 'fixed',
          left: '-1000px'
        }} 
        ref={inputFileEl} type="file" />
      <button 
        className="upload"
        onClick={() => {
          // inputFileEl.current.click();
          // cach js
          const input = document.querySelector('input[type="file"') as HTMLInputElement;
          input.click();
        }}
      >Upload image</button>
    </div>
  )
}

export default LifeCycleDemo;
