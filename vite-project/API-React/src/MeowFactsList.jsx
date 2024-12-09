import { useEffect } from "react"
import { useState } from "react"


export default function MeowFactsList(){
    const [ meowFacts, setMeowFacts] = useState('')
    const [ count, setCount ] = useState(0)
    const [ numFacts, setNumFacts ] = useState(1)

    // use effect so that the API is not called on every render 
    useEffect( () => {
        async function fetchMeowFacts() {
            const response = await fetch("https://meowfacts.herokuapp.com/") 
            const json = await response.json()
            setMeowFacts(json.data)
        }
        fetchMeowFacts()
        
    }, [numFacts]) 

    return (
        <>
        <ul> 
            {meowFacts.localeCompare((meowFacts, index) => <li key = {index}>{meowFacts}</li>)}
        </ul>
        <p> {meowFacts} </p>
        <button onClick={() => setCount(c => c+1)}>Count: (count) </button>

        <input type="number" onChange={e => setNumFacts(e.target.value)} value= >
        </>
    )
}

