import React from 'react'
import CurrentStreak from './CurrentStreak.jsx';
import MaxStreak from './MaxStreak.jsx';
import ConsistencyBadge from './ConsistencyBadge.jsx';

function StreakArea() {
  return (
    <div className='w-full rounded-2xl border-2 flex overflow-x-auto snap-x snap-mandatory md:flex-row'>

        <div className="w-full shrink-0 snap-start md:basis-1/3 m-1">
            <CurrentStreak />
        </div>

        <div className="w-full shrink-0 snap-start md:basis-1/3 m-1">
            <MaxStreak />
        </div>

        <div className="w-full shrink-0 snap-start md:basis-1/3 m-1">
            <ConsistencyBadge />
        </div>

    </div>
  )
}

export default StreakArea
