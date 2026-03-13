import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import useEscapeKey from '@/hooks/useEscapeKey';

describe('useEscapeKey', () => {
  it('should call handleClose when Escape key is pressed', async () => {
    const handleClose = vi.fn();
    renderHook(() => useEscapeKey(handleClose));

    const user = userEvent.setup();
    await user.keyboard('{Escape}');

    expect(handleClose).toHaveBeenCalledOnce();
  });

  it('should not call handleClose when other keys are pressed', async () => {
    const handleClose = vi.fn();
    renderHook(() => useEscapeKey(handleClose));

    const user = userEvent.setup();

    await user.keyboard('{Enter}');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Tab}');

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('should remove the event listener on unmount', async () => {
    const handleClose = vi.fn();
    const { unmount } = renderHook(() => useEscapeKey(handleClose));

    unmount();

    const user = userEvent.setup();
    await user.keyboard('{Escape}');

    expect(handleClose).not.toHaveBeenCalled();
  });
});
