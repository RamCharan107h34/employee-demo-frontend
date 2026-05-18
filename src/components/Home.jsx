import Test from "./Test"
import { useCounterStore } from "../Store/CounterStore"
import { counterContextObj } from "./ContextProvider"
import { useContext } from "react"



function Home () {

  const newCounter = useCounterStore((state)=>state.newCounter);
  const incrementCounter = useCounterStore((state)=>state.incrementCounter);
  const {counter,counter1,changeCounter,changeCounter1} = useContext(counterContextObj);
  const decrementCounter = useCounterStore((state)=>state.decrementCounter); 

  console.log("Home")

  return (
    <div className="text-2xl space-y-4">
      <div>
        <p>counter: {counter}</p>
        <button onClick={changeCounter} className="bg-green-300 px-5 py-2 mt-2">changeCounter</button>
      </div>
      <div>
        <h1>New Counter : {newCounter}</h1>
        <button onClick={incrementCounter} className="bg-blue-300 px-5 py-2 mt-2">incrementCounter</button>
        <button onClick={decrementCounter} className="bg-red-300 px-5 py-2 mt-2">decrementCounter</button>
      </div>
    </div>
  )
}

export default Home