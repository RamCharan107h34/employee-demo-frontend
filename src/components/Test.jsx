import { useCounterStore } from "../Store/CounterStore"

function Test() {
    const newCounter1 = useCounterStore((state)=>state.newCounter1)
    const incrementCounter1 = useCounterStore((state)=>state.incrementCounter1)

  return (
    <div>
        <h1>Count1 : {newCounter1}</h1>
        <button onClick={incrementCounter1} className="bg-red-300 px-5 py-2">incrementCounter1</button>
    </div>
  )
}

export default Test