import React, { useState, useEffect } from 'react';

function ProgressBar({ totalQuestions, answeredQuestions }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const newWidth = (answeredQuestions / totalQuestions) * 100;
    setWidth(newWidth);
  }, [answeredQuestions, totalQuestions]);

  return (
    <div className="w-full h-4 bg-gray-200 rounded-full">
      <div
        className="h-full bg-blue-500 rounded-full"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
