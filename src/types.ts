import { ReactElement } from 'react';
import {
  EdgeAttributes,
  NodeAttributes,
  ClusterSubgraphAttributes,
  IRootCluster,
  RootClusterAttributes,
  EdgeTargetLike,
  EdgeTargetsLike,
  IHasComment,
} from 'ts-graphviz';

export interface IContext {
  root?: IRootCluster;
}

export interface ClusterAttributesProps {
  edge?: EdgeAttributes;
  node?: NodeAttributes;
  graph?: ClusterSubgraphAttributes;
}

export interface RootClusterProps extends Omit<RootClusterAttributes, 'comment'>, ClusterAttributesProps, IHasComment {
  id?: string;
}

export interface SubgraphProps extends Omit<ClusterSubgraphAttributes, 'comment'>, ClusterAttributesProps, IHasComment {
  id?: string;
}

export interface EdgeProps extends Omit<EdgeAttributes, 'comment'>, IHasComment {
  targets: (EdgeTargetLike | EdgeTargetsLike)[];
}

export interface NodeProps extends Omit<NodeAttributes, 'comment'>, IHasComment {
  id: string;
}

export interface RootClusterComponentProps extends Omit<RootClusterProps, 'label'> {
  label?: ReactElement | string;
}

export interface EdgeComponentProps extends Omit<EdgeProps, 'label'> {
  label?: ReactElement | string;
}

export interface NodeComponentProps extends Omit<NodeProps, 'label' | 'xlabel'> {
  label?: ReactElement | string;
  xlabel?: ReactElement | string;
}

export interface SubgraphComponentProps extends Omit<SubgraphProps, 'label'> {
  label?: ReactElement | string;
}

export interface ClusterPortalComponentProps {
  name?: string;
}
