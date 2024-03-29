/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Component, ReactElement } from 'react';
import { render } from '../../../render';

export function renderExpectToThrow(element: ReactElement, ...expectedError: string[]): void {
  const errors: Error[] = [];
  class ErrorBoundary extends Component<Record<string, unknown>, { hasError: boolean }> {
    constructor(props: Record<string, unknown>) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error: Error) {
      errors.push(error);
    }

    render() {
      if (this.state.hasError) {
        return <></>;
      }
      return this.props.children;
    }
  }

  try {
    render(<ErrorBoundary>{element}</ErrorBoundary>);
  } catch (e) {
    errors.push(e);
  }
  expect(errors.length).toBeGreaterThanOrEqual(expectedError.length);

  expect(errors.map((e) => e.message)).toEqual(expect.arrayContaining(expectedError));
}
