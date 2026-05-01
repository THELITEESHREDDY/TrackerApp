import React, { useState } from 'react'

function HeatMapArea() {
    const [acitve, setActive]=useState("overall");
    function handleClick(id){
        if(id===0){
            setActive("overall")
        }
        else if(id==1){
            setActive("habit1")
        }
        else if(id==2){
            setActive("habit2")
        }
        else if(id==3){
            setActive("habit3")
        }
    }

  return (
    <div className='h-auto w-full rounded-2xl border-2 bg-blue-950 my-4'>
        <div className='w-full h-auto p-1 flex justify-center text-white '>
            <h1 className='font-bold '>Consistency Heat Map</h1>
        </div>
        <div className='h-auto w-full text-white rounded-t-2xl p-2'>
            <button onClick={()=>handleClick(0)} className='px-1'>overall</button>
            <button onClick={()=>handleClick(1)} className='px-1'>habit1</button>
            <button onClick={()=>handleClick(2)} className='px-1'>habit2</button>
            <button onClick={()=>handleClick(3)} className='px-1'>habit3</button>
        </div>
        <div className='w-full h-48 bg-black text-white rounded-b-2xl flex justify-center items-center'>
            coming soon✨
        </div>
    </div>
  )
}

export default HeatMapArea
