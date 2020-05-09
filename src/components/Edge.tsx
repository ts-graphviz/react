import React, { ReactElement, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import gv from 'ts-graphviz';
import { useEdge, EdgeProps } from '../hooks/use-edge';
import { useRenderedID } from '../hooks/use-rendered-id';

type Props = Omit<EdgeProps, 'label'> & {
  label?: ReactElement | string;
};

export const Edge = forwardRef<gv.IEdge, Props>(({ children, label, ...props }, ref) => {
  const renderedLabel = useRenderedID(label);
  if (renderedLabel !== undefined) Object.assign(props, { label: renderedLabel });
  const edge = useEdge(props);
  useImperativeHandle(ref, () => edge);
  return <>{children}</>;
});

Edge.displayName = 'Edge';

Edge.propTypes = {
  targets: PropTypes.array.isRequired,
  comment: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Edge.defaultProps = {
  comment: undefined,
  label: undefined,
};
