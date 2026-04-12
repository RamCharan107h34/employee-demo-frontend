import { useContext } from "react"
import { counterContextObj } from "./ContextProvider"
import { useCounterStore } from "../Store/CounterStore"

function Test() {
    const {counter1,changeCounter1} = useContext(counterContextObj)
    console.log("Test")

    let newCounter1 = useCounterStore((state)=>state.newCounter1)
    let incrementCounter1 = useCounterStore((state)=>state.incrementCounter1)

  return (
    <div>
        <h1>Count1 : {counter1}</h1>
        <button onClick={changeCounter1} className=" bg-amber-300 px-5 py-2">Change</button>
        <h1>Count : {newCounter1}</h1>
        <button onClick={incrementCounter1} className="bg-red-300 px-5 py-2">incrementCounter1</button>
    </div>
  )
}

export default Test