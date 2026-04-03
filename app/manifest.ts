import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Commerce',
    short_name: 'Commerce',
    description:
      'Discover amazing products with our Next.js 16 powered platform featuring partial pre-rendering and advanced caching',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#030819',
    theme_color: 'linear-gradient(to right, #4d9aff, #b188ff)',
    lang: 'en',
    dir: 'ltr',
    categories: ['e-commerce', 'shopping', 'technology'],
    icons: [
      {
        src: 'icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: 'icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: 'icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    screenshots: [
      {
        src: 'icon.png',
        sizes: '800x500',
        type: 'image/jpeg',
        form_factor: 'wide',
        label: 'Commerce'
      }
    ]
  };
}
