import{ useRef, useState} from 'react'

export default function StopWatch(){
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const isRunningRef = useRef(false)

    function start(){
        if (isRunningRef.current) return

        intervalIdRef.current = setInterval(() => {
            setElapsedTime(elapse => elapse + 1 )
        }, 1)
        isRunningRef.current = true
        console.log(intervalIdRef.current)
    }

    function stop(){
        console.log(intervalIdRef.current)
        isRunningRef.current = false
        clearInterval(intervalIdRef.current)
    }


return(
    <>
    <div> Timer: {elapsedTime} </div>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    </>
)
}