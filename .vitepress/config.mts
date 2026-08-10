import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcExclude: ['**/README.md', '**/CONTRIBUTORS.md'],
  vite: {
    resolve: { preserveSymlinks: true },
  },
  lang: 'en-US',
  title: "OpenStint",
  description: "OpenStint is an open-source project reading AMB/RC3/RC4-style near-field transponders using inexpensive SDR (HackRF or RTL-SDR) radios.",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/decoder/docs/introduction' },
      { text: 'Tutorials', link: '/decoder/docs/setup-simple-rtlsdr' },
      { text: 'Buy Transponders', link: '/decoder/docs/purchase-transponder' }
    ],

    sidebar: [
      { text: 'Introduction', link: '/decoder/docs/introduction' },
      {
        text: 'Tutorials',
        items: [
          { text: 'Simple setup /w RTL-SDR', link: '/decoder/docs/setup-simple-rtlsdr' },
          { text: 'Supported SDRs', link: '/decoder/docs/supported-hardware' },
          { text: 'Loop (the antenna)', link: '/decoder/docs/setup-tutorial' },
          { text: 'OpenStint on Windows', link: '/decoder/docs/setup-tutorial-windows' },
          { text: 'OpenStint on Raspberry Pi', link: '/decoder/docs/setup-tutorial-raspberry' },
          { text: 'Transponder firmware', link: '/transponder/docs/transponder-flashing' }
        ]
      },
      {
        text: 'Software',
        items: [
          { text: 'LapBeeps', link: '/decoder/docs/scoring-lapbeeps' },
          { text: 'RCGTiming', link: '/decoder/docs/scoring-rcgtiming' },
          { text: 'TrackTiming', link: '/decoder/docs/scoring-tracktiming' },
          { text: 'ZRound', link: '/decoder/docs/scoring-zround' }
        ]
      },
      {
        text: 'Integrations',
        items: [
          { text: 'Decoder protocol', link: '/decoder/docs/decoder-protocol' },
          { text: 'Transponder protocol', link: '/decoder/docs/transponder-protocol' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'RC4 learning', link: '/decoder/docs/rc4' },
          { text: 'Replay capture', link: '/decoder/docs/replay-capture' },
          { text: 'Passing detection', link: '/decoder/docs/passing-detection' },
          { text: 'Timing accuracy', link: '/decoder/docs/timing-accuracy' }
        ]
      },
      {
        text: 'Developers',
        items: [
          { text: 'RX architecture', link: '/decoder/docs/dev-rx-architecture' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zsellera/openstint' }
    ],

    footer: {
      message: '<a href="https://www.rctech.net/forum/radio-electronics/1137693-openstint-laptiming-decoder.html">Support forum</a> | ' +
               '<a href="https://github.com/zsellera/openstint-transponder">Transponder</a> | ' +
               '<a href="https://github.com/zsellera/openstint-preamp">Preamplifier</a>'
    }
  }
})
