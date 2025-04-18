import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
