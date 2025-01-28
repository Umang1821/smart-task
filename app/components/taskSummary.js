import React from 'react';

export default function TaskSummary({ taskCounts }) {
  return (
    <div className="flex gap-4 mb-3 mt-4">
      <div className="w-60 h-14  border text-black border-gray-400 rounded-lg p-4 shadow-sm">
        Total Tasks: {taskCounts.total}
      </div>
      <div className="w-60 h-14  border text-black border-gray-400 rounded-lg p-4 shadow-sm">
        Low Priority: {taskCounts.low}
      </div>
      <div className="w-60 h-14  border text-black border-gray-400 rounded-lg p-4 shadow-sm">
        Medium Priority: {taskCounts.medium}
      </div>
      <div className="w-60 h-14  border text-black border-gray-400 rounded-lg p-4 shadow-sm">
        High Priority: {taskCounts.high}
      </div>
    </div>
  );
}
