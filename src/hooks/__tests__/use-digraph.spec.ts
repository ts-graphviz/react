import { Digraph } from 'ts-graphviz';
import { renderHook } from '@testing-library/react-hooks';
import { context } from './utils/wrapper';
import { useDigraph } from '../use-digraph';

describe('useDigraph', () => {
  it('returns Digraph instance', () => {
    const { result } = renderHook(() => useDigraph(), {
      wrapper: context(),
    });
    expect(result.current).toBeInstanceOf(Digraph);
  });

  it('props comment is changed correctly', () => {
    const { result } = renderHook(() => useDigraph({ comment: 'some comment' }), {
      wrapper: context(),
    });
    expect(result.current.comment).toBe('some comment');
  });

  it('props attributes edge is changed correctly', () => {
    const { result } = renderHook(() => useDigraph({ edge: { color: 'blue', fontcolor: 'blue' } }), {
      wrapper: context(),
    });
    expect(result.current.attributes.edge.get('color')).toBe('blue');
    expect(result.current.attributes.edge.get('fontcolor')).toBe('blue');
  });

  it('props attributes node is changed correctly', () => {
    const { result } = renderHook(() => useDigraph({ node: { shape: 'none' } }), {
      wrapper: context(),
    });
    expect(result.current.attributes.node.get('shape')).toBe('none');
  });

  it('props attributes graph is changed correctly', () => {
    const { result } = renderHook(() => useDigraph({ graph: { bgcolor: 'white' } }), {
      wrapper: context(),
    });
    expect(result.current.attributes.graph.get('bgcolor')).toBe('white');
  });
});
