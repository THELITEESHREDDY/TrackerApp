import React from 'react'

function ProgressBarMini({percentageFunction}) {
  const percentage=percentageFunction;
  return (
    <div>
      {percentage}    
    </div>
  )
}

export default ProgressBarMini
