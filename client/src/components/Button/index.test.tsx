import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('should render a button', () => {
    render(<Button>Button Test</Button>);

    expect(
      screen.getByRole('button', { name: /button test/i })
    ).toBeInTheDocument();
  });
});
