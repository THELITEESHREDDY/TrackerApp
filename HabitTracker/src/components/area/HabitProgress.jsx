import React, { useEffect, useState } from "react";

function HabitProgress({ list = [] }) {
  let completed = 0,
    delayed = 0,
    early = 0,
    notCompleted = 0;

  // Count categories
  list.forEach((habit) => {
    if (habit.completionTime === null) notCompleted++;
    else if (habit.completionTime > habit.endTime + 600000) delayed++;
    else if (habit.completionTime < habit.startTime) early++;
    else completed++;
  });

  const total = list.length || 1;

  // Animated widths
  const [widths, setWidths] = useState({
    completed: 0,
    delayed: 0,
    early: 0,
    notCompleted: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidths({
        completed: (completed / total) * 100,
        delayed: (delayed / total) * 100,
        early: (early / total) * 100,
        notCompleted: (notCompleted / total) * 100,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [list]);

  // Build segments dynamically (only non-zero ones)
  const segments = [
    { key: "completed", count: completed, color: "bg-green-600", label: "Completed" },
    { key: "delayed", count: delayed, color: "bg-red-600", label: "Delayed" },
    { key: "early", count: early, color: "bg-orange-500", label: "Early" },
    { key: "notCompleted", count: notCompleted, color: "bg-gray-600", label: "Not Completed" },
  ].filter((seg) => seg.count > 0);

  return (
    <div className="w-full h-14 bg-black border rounded-2xl p-1 my-4">
      <div className="flex w-full h-full rounded-2xl overflow-hidden">

        {segments.map((seg, index) => {
          const isFirst = index === 0;
          const isLast = index === segments.length - 1;

          return (
            <div
              key={seg.key}
              style={{ width: `${widths[seg.key]}%` }}
              className={`
                ${seg.color}
                transition-all duration-700 ease-in-out
                ${isFirst ? "rounded-l-2xl" : ""}
                ${isLast ? "rounded-r-2xl" : ""}
              `}
              title={`${seg.label}: ${seg.count}`}
            />
          );
        })}

      </div>
    </div>
  );
}

export default HabitProgress;