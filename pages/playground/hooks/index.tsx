import React, { useState, useEffect, useMemo, useCallback } from "react";
import Button from '../../../components/Button';

const LifeCycleDemo = () => {
  console.log("constuctor");
  
  // Tương ứng vs Constructor.
  useMemo(() => {
    console.log("useMemo <-> constructor");
  },[]);
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
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
    </div>
  )
}

export default LifeCycleDemo;
