/* eslint-disable react/prop-types */
import{ useRef } from 'react'

export default function WidthOfElement(){
    const divRef = useRef(null)

    fuction consoleLogDivWidth(){
        console.log(divRef.current.getB)
    }


    return(
        <>
        <div ref=[divRef]> This div has text in it</div>
        <button onClick={consoleLogDivWidth}>Console log </button>
        </>
    )
}