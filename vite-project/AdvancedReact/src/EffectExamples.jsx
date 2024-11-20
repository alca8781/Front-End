/* eslint-disable react/prop-types */
import { useEffect } from 'react'

export default function EffectExamples(){
    const [ counter , setCounter ] = useState(0)

    useEffect(() =>
        console.log('this is my effect')
    )
   
   
   
   
   
    return(
        <>
        <button onClick={() => setCounter(c => c+1)}</button> 
        </>
    )
}