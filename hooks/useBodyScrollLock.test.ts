import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';

describe('useBodyScrollLock', () => {
  beforeEach(() => {
    document.body.style.overflow = '';
    document.body.style.width = '';
  });

  afterEach(() => {
    document.body.style.overflow = '';
    document.body.style.width = '';
  });

  it('should set overflow to hidden when active is true', () => {
    renderHook(() => useBodyScrollLock(true));

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should restore original overflow and clear width on unmount', () => {
    document.body.style.overflow = 'auto';

    const { unmount } = renderHook(() => useBodyScrollLock(true));

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe('auto');
    expect(document.body.style.width).toBe('');
  });

  it('should not change body styles when active is false', () => {
    renderHook(() => useBodyScrollLock(false));

    expect(document.body.style.overflow).toBe('');
    expect(document.body.style.width).toBe('');
  });

  it('should lock scroll when active changes from false to true', () => {
    const { rerender } = renderHook(({ active }) => useBodyScrollLock(active), {
      initialProps: { active: false }
    });

    expect(document.body.style.overflow).toBe('');

    rerender({ active: true });

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should unlock scroll when active changes from true to false', () => {
    const { rerender } = renderHook(({ active }) => useBodyScrollLock(active), {
      initialProps: { active: true }
    });

    expect(document.body.style.overflow).toBe('hidden');

    rerender({ active: false });

    expect(document.body.style.overflow).toBe('');
    expect(document.body.style.width).toBe('');
  });
});
