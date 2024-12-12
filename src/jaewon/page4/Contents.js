import React from 'react'
import ProblemList from './ProblemList'
import { style } from './styles4'

function Contents() {
  return (
    <div className='Contents' style={style.contents}>
        <p className='Guide'>다음 주어진 단어로 끝말잇기를 해보세요(1~9).</p>

        <ProblemList></ProblemList>
    
    </div>
  )
}

export default Contents