import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      <button 
        className="button" 
        onClick={() => props.removeFeature(props.feature)}
      >
        X {props.feature.name}
      </button>
    </li>
  );
};

export default AddedFeature;
