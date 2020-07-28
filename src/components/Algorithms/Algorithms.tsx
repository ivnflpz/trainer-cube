import React from 'react';
import AlgorithmCard from './AlgorithmCard';
import ollList from '../../data/oll';
import pllList from '../../data/pll';

interface AlgorithmsProps {
  type: AlgType;
}

const Algorithms: React.FC<AlgorithmsProps> = ({ type }) => {
  const list = type === 'OLL' ? ollList : pllList;
  return (
    <>
      <div>
        {list.map((alg) => (
          <AlgorithmCard key={alg.name} algorithm={alg} />
        ))}
      </div>
    </>
  );
};

export default Algorithms;
