import React from 'react';

const CalculateDate = ({ date }) => {
  const getDateDifferenceStatus = (inputDateStr) => {
    const inputDate = new Date(inputDateStr);
    const today = new Date();

    // Reset time for fair comparison
    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (inputDate.getTime() === today.getTime()) {
      return "today";
    }

    const yearDiff = today.getFullYear() - inputDate.getFullYear();
    const monthDiff = today.getMonth() - inputDate.getMonth();
    const dayDiff = today.getDate() - inputDate.getDate();

    if (yearDiff > 0) {
      return `${yearDiff} year${yearDiff > 1 ? 's' : ''} ago`;
    }

    if (monthDiff > 0) {
      return `${monthDiff} month${monthDiff > 1 ? 's' : ''} ago`;
    }

    const msInDay = 1000 * 60 * 60 * 24;
    const daysAgo = Math.floor((today - inputDate) / msInDay);
    return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  };

  return <span>{getDateDifferenceStatus(date)}</span>;
};

export default CalculateDate;
