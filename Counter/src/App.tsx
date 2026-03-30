import {useReducer } from 'react'

import './App.css'
type State={count:number}
type Action={type:'increment'} | {type:'decrement'}
function reducer(state:State,action:Action):State{
  switch (action.type) {
    case 'increment':
      return {count:state.count +1};
      case 'decrement':
        return {count:state.count -1}
      default:
    return state

  }

}
function App() {
  const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <>
    <button onClick={()=>{dispatch({type:'increment'})
}}> +</button>
<h3>{state.count}</h3>
<button onClick={()=>{dispatch({type:'decrement'})
}}>-</button>
    </>
  )
}

export default App
