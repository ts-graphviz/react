import React, { ReactElement, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import gv from 'ts-graphviz';
import { useNode, NodeProps } from '../hooks/use-node';
import { useRenderedID } from '../hooks/use-rendered-id';

type Props = Omit<NodeProps, 'label'> & {
  label?: ReactElement | string;
};

export const Node = forwardRef<gv.INode, Props>(({ children, label, ...props }, ref) => {
  const renderedLabel = useRenderedID(label);
  if (renderedLabel !== undefined) Object.assign(props, { label: renderedLabel });
  const node = useNode(props);
  useImperativeHandle(ref, () => node);
  return <>{children}</>;
});

Node.displayName = 'Node';

Node.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Node.defaultProps = {
  comment: undefined,
  label: undefined,
};
