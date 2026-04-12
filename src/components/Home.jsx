import React, { useContext } from "react"
import { counterContextObj } from "./ContextProvider"
import Test from "./Test"
import { useCounterStore } from "../Store/CounterStore"



function Home() {

  let newCounter = useCounterStore((state)=>state.newCounter);
  let incrementCounter = useCounterStore((state)=>state.incrementCounter);

  const {counter,changeCounter,counter1,changeCounter1} = useContext(counterContextObj)
  console.log("Home")

  return (
    <div className="text-2xl">
      <h1>Count : {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-300 px-5 py-2">Change</button>
      <h1>Count : {newCounter}</h1>
      <button onClick={incrementCounter} className="bg-blue-300 px-5 py-2">incrementCounter</button>
      <Test/>
    </div>
  )
}

export default Home