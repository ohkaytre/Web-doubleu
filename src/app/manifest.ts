
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DoubleU Echoes',
    short_name: 'DoubleU',
    description: 'The definitive digital archive and interactive world of artist DoubleU.',
    start_url: '/',
    display: 'standalone',
    background_color: '#12161b',
    theme_color: '#d67d4c',
    orientation: 'portrait',
    scope: '/',
    icons: [
      {
        src: 'https://picsum.photos/seed/pwa-icon-192/192/192',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'https://picsum.photos/seed/pwa-icon-512/512/512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'The Vault',
        url: '/vault',
        description: 'Open the sealed archives',
      },
      {
        name: 'Soundscape Mixer',
        url: '/mixer',
        description: 'Deconstruct the stems',
      },
      {
        name: 'Memory Lane',
        url: '/memory-lane',
        description: 'Browse the timeline',
      }
    ],
    screenshots: [
      {
        src: 'https://picsum.photos/seed/screenshot-mobile/750/1334',
        sizes: '750x1334',
        type: 'image/png',
        label: 'Explore the Discography Map',
      },
    ],
  }
}
