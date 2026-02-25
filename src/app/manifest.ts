import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: 'doubleu-echoes-pwa',
    name: 'DoubleU Echoes',
    short_name: 'DoubleU',
    description: 'The definitive digital archive and interactive world of artist DoubleU.',
    start_url: '/',
    display: 'standalone',
    background_color: '#12161b',
    theme_color: '#d67d4c',
    orientation: 'portrait',
    scope: '/',
    dir: 'ltr',
    lang: 'en',
    // @ts-ignore - Experimental and advanced PWA members
    display_override: ['window-controls-overlay', 'tabbed', 'standalone', 'minimal-ui'],
    // @ts-ignore
    launch_handler: {
      client_mode: 'focus-existing',
    },
    // @ts-ignore
    note_taking: {
      new_note_url: '/artist-log',
    },
    // @ts-ignore
    share_target: {
      action: '/guestbook',
      method: 'GET',
      params: {
        title: 'title',
        text: 'text',
        url: 'url',
      },
    },
    // @ts-ignore
    protocol_handlers: [
      {
        protocol: 'web+doubleu',
        url: '/?uri=%s',
      },
    ],
    // @ts-ignore
    edge_side_panel: {
      preferred_width: 400,
    },
    categories: ['music', 'entertainment', 'social'],
    iarc_rating_id: 'e10+', // Everyone 10+ placeholder
    prefer_related_applications: false,
    related_applications: [],
    icons: [
      {
        src: 'https://placehold.co/192x192/png?text=W',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'https://placehold.co/512x512/png?text=DoubleU',
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
        type: 'image/jpeg',
        label: 'Explore the Discography Map on Mobile',
        form_factor: 'narrow',
      },
      {
        src: 'https://picsum.photos/seed/screenshot-desktop/1920/1080',
        sizes: '1920x1080',
        type: 'image/jpeg',
        label: 'The definitive digital archive on Desktop',
        form_factor: 'wide',
      },
    ],
  }
}
