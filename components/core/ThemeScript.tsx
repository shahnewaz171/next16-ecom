/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: . */

const script = `(function() {
  try {
    var theme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    var color = theme === 'dark' ? '#212737' : '#fdfdfd';

    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', color);
  } catch (e) {}
})()`;

const ThemeScript = () => (
  <>
    <meta name="theme-color" content="#fdfdfd" />
    <script id="theme-initializer" dangerouslySetInnerHTML={{ __html: script }} />
  </>
);

export default ThemeScript;
