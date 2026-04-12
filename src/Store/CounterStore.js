import { create } from "zustand";

// create store
export const useCounterStore = create((set)=>({
    // state
    newCounter: 0,
    newCounter1: 0,
    // add user state (name, age,email)
    user: {name:"ram",email:"ram@email.com",age:21},
    // funciton to change email
    changeEmail:()=>set({...user,email:"text@email.com"}),
    // function to change name and age
    changeNameAndAge:()=>set({...user,name:"charan",age:23}),
    // function to modify the state
    incrementCounter:() => set(state=>({newCounter: state.newCounter + 1})),
    incrementCounter1:() => set(state=>({newCounter1: state.newCounter1 + 1})),
    decrementCounter:() => set(state=>({newCounter: state.newCounter - 1})),
    reset:() => set({newCounter:0}),
    // function to change newCounter to 500
    setCounterTo500:() => set({newCounter: 500}),
    // function to decrement newCounter by 20
    decrementCounterBy20:() => set((state)=>({newCounter: state.newCounter - 20}))
}));

