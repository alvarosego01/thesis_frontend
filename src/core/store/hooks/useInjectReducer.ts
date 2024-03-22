// src/hooks/useInjectReducer.ts
import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { core_store } from '../store';

interface UseInjectReducerArgs {
  key: string;
  reducer: Reducer;
}

export function useInjectReducer({ key, reducer }: UseInjectReducerArgs): void {
  useEffect(() => {
    core_store.injectReducer(key, reducer);
  }, [key, reducer]);
}
