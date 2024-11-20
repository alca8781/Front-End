/* eslint-disable react/prop-types */ 
import EffectExamples from './EffectExamples'
import ref_vs_state from './ref_vs_state'
import StopWatch from './StopWatch'
import WidthOfElement from './WidthOfElement'

import{useState} from 'react'

export default function App(){
  const [showEffectExamples, setshowEffectExamples ]

  let EffectExamples = null 
  if (showEffectExamples){
    EffectExamples = EffectExamples
  }

  const EffectExamples = showEffectExamples ? <EffectExamples />> : null 



  return(
    <>
    <ref_vs_state/>
    <StopWatch/> 
    <WidthOfElement/> 
    <EffectExamples/>
    <button onClick={(showEffectExamples(e => !e))}> Show effect examples </button>
    </>
  )

}
