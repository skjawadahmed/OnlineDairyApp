import React from 'react';

interface FilterButtonsProps {
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilterChange }) => {
  return (
    <div className="my-4 space-x-2">
      {['All', 'Week', 'Month', 'Year'].map((label) => (
        <button
          key={label}
          onClick={() => onFilterChange(label.toLowerCase())}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
