import React from 'react';

type FilterButtonsProps = {
  highlightedId: string | null;
  setHighlightedId: React.Dispatch<React.SetStateAction<string | null>>;
};

const FilterButtons: React.FC<FilterButtonsProps> = ({
  highlightedId,
  setHighlightedId,
}) => {
  return (
    <div>
      {['성북구', '강남구', '노원구', '중랑구'].map(id => (
        <button
          key={id}
          onClick={() => setHighlightedId(id)}
          style={{
            backgroundColor: id === highlightedId ? 'lightgray' : 'white',
          }}
        >
          {id}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
