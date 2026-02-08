import setThemeToCookie from '@/components/actions/setThemeToCookie';
import { DEFAULT_THEME, type Theme } from '@/utils/theme';

let listeners: Array<() => void> = [];

export const themeStore = {
  applyTheme(next: Theme) {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(next);
    root.style.colorScheme = next;

    // Update cookie on the server
    setThemeToCookie(next);

    // Notify React subscribers
    emitChange();
  },

  getSnapshot: (): Theme => {
    if (typeof document === 'undefined') return DEFAULT_THEME;
    return document.documentElement.classList.contains('light') ? 'light' : 'dark';
  },

  getServerSnapshot: (): Theme => DEFAULT_THEME,

  subscribe: (listener: () => void) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }
};

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}
