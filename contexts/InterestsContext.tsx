// contexts/InterestsContext.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

type ContextShape = {
  interests: string[];
  setInterests: (i: string[]) => void;
};

export const InterestsContext = createContext<ContextShape>({
  interests: [],
  setInterests: () => {},
});

export const InterestsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [interests, setInterestsState] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem('ubuntu:interests');
        if (raw) setInterestsState(JSON.parse(raw));
      } catch {}
    })();
  }, []);

  const setInterests = (i: string[]) => {
    setInterestsState(i);
    AsyncStorage.setItem('ubuntu:interests', JSON.stringify(i)).catch(() => {});
  };

  return <InterestsContext.Provider value={{ interests, setInterests }}>{children}</InterestsContext.Provider>;
};
