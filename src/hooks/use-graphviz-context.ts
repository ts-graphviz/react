import { useContext } from 'react';
import { GraphvizContext } from '../components/contexts/GraphvizContext';
import { IContext } from '../types';
import { NoGraphvizContextErrorMessage } from '../utils/errors';

export function useGraphvizContext(): IContext {
  const context = useContext(GraphvizContext);
  if (context === null) {
    throw Error(NoGraphvizContextErrorMessage);
  }
  return context;
}
