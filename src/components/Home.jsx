import Test from "./Test"
import { useCounterStore } from "../Store/CounterStore"



function Home() {

  const newCounter = useCounterStore((state)=>state.newCounter);
  const incrementCounter = useCounterStore((state)=>state.incrementCounter);

  console.log("Home")

  return (
    <div className="text-2xl">
      <h1>Count : {newCounter}</h1>
      <button onClick={incrementCounter} className="bg-blue-300 px-5 py-2">incrementCounter</button>
      <Test/>
    </div>
  )
}

export default Home