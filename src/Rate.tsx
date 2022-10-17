import React, { useCallback, useEffect, useState } from 'react';
import { StarIcon } from './StarIcon';

import './Rate.css';

export interface RateProps {
  /**
   * Number of scores
   */
  score: number;
  /**
   * Fires when user change score
   */
  onChange?: (score: number) => void;
}

const stars = Array(5).fill(0);

export const Rate: React.FC<RateProps> = ({ score, onChange }) => {
  const [internalScore, setInternalScore] = useState(score);

  const handleClick = useCallback(
    (score: number) => {
      setInternalScore(score);
      onChange && onChange(score);
    },
    [onChange]
  );
  const handleMouseOver = useCallback((score: number) => {
    setInternalScore(score);
  }, []);
  const handleMouseOut = useCallback(() => {
    setInternalScore(score);
  }, [score]);

  useEffect(() => {
    setInternalScore(score);
  }, [score]);

  return (
    <div className="rate">
      <div>Rate the game!</div>
      <div className="stars">
        {stars.map((_, index) => (
          <StarIcon
            key={index}
            gradient={index < internalScore}
            onClick={handleClick.bind(null, index + 1)}
            onMouseOver={handleMouseOver.bind(null, index + 1)}
            onMouseOut={handleMouseOut}
            className="text-[#363B44] pr-1 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

