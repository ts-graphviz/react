import { ReactElement, createElement } from 'react';
import { toDot } from 'ts-graphviz';
import { GraphvizContext } from './contexts/GraphvizContext';
import { reconciler } from './reconciler';
import { ClusterMap } from './contexts/ClusterMap';
import { IContext } from './types';

const noop = (): void => undefined;

export function render(element: ReactElement, context: IContext): number {
  const container = reconciler.createContainer({}, 0, false, null);
  // Clusters
  return reconciler.updateContainer(
    createElement(
      ClusterMap.Provider,
      {
        value: new Map(),
      },
      createElement(
        GraphvizContext.Provider,
        {
          value: context,
        },
        element,
      ),
    ),
    container,
    null,
    noop,
  );
}

export function renderToDot(element: ReactElement): string {
  const context: IContext = {};
  render(element, context);
  return context.root ? toDot(context.root) : '';
}
