import { useState, useCallback } from 'react';

const useCredits = (initialCredits = 3) => {
  const [credits, setCredits] = useState(initialCredits);

  const consumeCredit = useCallback(() => {
    setCredits((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const addCredits = useCallback((amount: number) => {
    setCredits((prev) => prev + amount);
  }, []);

  const hasCredits = credits > 0;

  return { credits, consumeCredit, addCredits, hasCredits };
};

export default useCredits;
