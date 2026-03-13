import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Counter from '@/components/ui/Counter';

describe('useCounter', () => {
  it('should initialize count to 0', () => {
    render(<Counter count={0} />);
  });

  it('should increment count', async () => {
    const increment = vi.fn();
    render(<Counter count={0} increment={increment} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(increment).toHaveBeenCalledTimes(1);
    // expect(screen.getByTestId('count')).toHaveTextContent('Count: 1'); for the uncontrolled component
  });

  it('should increment and decrement count', async () => {
    const increment = vi.fn();
    const decrement = vi.fn();

    render(<Counter count={0} increment={increment} decrement={decrement} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'Increment' }));
    await user.click(screen.getByRole('button', { name: 'Decrement' }));

    expect(increment).toHaveBeenCalledTimes(1);
    expect(decrement).toHaveBeenCalledTimes(1);
  });

  it('should reset count to 0', async () => {
    const reset = vi.fn(() => 0);
    render(<Counter count={2} reset={reset} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'Reset' }));

    // expect(screen.getByTestId('count')).toHaveTextContent('Count: 0'); for the uncontrolled component
    expect(reset).toHaveBeenCalledTimes(1);
  });
});
