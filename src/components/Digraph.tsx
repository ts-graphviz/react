import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { RootClusterContext } from './contexts/RootClusterContext';
import { ClusterContext } from './contexts/ClusterContext';
import { useDigraph, DigraphProps } from '../hooks/use-digraph';
import { useRenderedID } from '../hooks/use-rendered-id';

type Props = Omit<DigraphProps, 'label'> & {
  label?: ReactElement | string;
};

export const Digraph: FC<Props> = ({ children, label, ...props }) => {
  const renderedLabel = useRenderedID(label);
  if (renderedLabel !== undefined) Object.assign(props, { label: renderedLabel });
  const digraph = useDigraph(props);
  return (
    <RootClusterContext.Provider value={digraph}>
      <ClusterContext.Provider value={digraph}>{children}</ClusterContext.Provider>
    </RootClusterContext.Provider>
  );
};

Digraph.displayName = 'Digraph';

Digraph.defaultProps = {
  id: undefined,
  comment: undefined,
  label: undefined,
};

Digraph.propTypes = {
  id: PropTypes.string,
  comment: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
