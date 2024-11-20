/* eslint-disable react/prop-types */ 
import{ useRef, useState} from 'react'

export default function ref_vs_state() {
    const refCounter = useRef(0)
    const [stateCounter, setStateCounter] = useState(0)
  
      function incrementRefCounter() {
        refCounter.current += 1 
        console.log(refCounter.current)
      }
      function incrementStateCounter() {
        setStateCounter(stateCounter + 1)
        console.log(stateCounter)
      }
  
      return (
      <>
        <button onClick={incrementRefCounter}>
          the value of refCounter is {refCounter.current}
        </button>
  
        <button onClick={incrementStateCounter}>
          the value of stateCounter is {stateCounter}
        </button>
      </>
    )
  }