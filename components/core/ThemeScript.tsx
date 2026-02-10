/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: This script is safe as it only reads a cookie and applies a class to the document element */

import { DEFAULT_THEME, THEME_COOKIE_NAME } from '@/utils/theme';

const script = `(function() {
  try {
    const match = document.cookie.match(
      /(?:^|;\\s*)${THEME_COOKIE_NAME}=([^;]*)/
    );
    const theme = match ? match[1] : '${DEFAULT_THEME}';

    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {
    console.error('Failed to apply theme from cookie', e);
  }
})()`;

const ThemeScript = () => <script dangerouslySetInnerHTML={{ __html: script }} />;

export default ThemeScript;
