import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Serverly',
  tagline: 'A full SQL server. In your pocket.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://serverly-app.github.io',
  baseUrl: '/',

  organizationName: 'serverly-app',
  projectName: 'serverly-app.github.io',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/serverly-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Serverly',
      logo: {
        alt: 'Serverly App Icon',
        src: 'img/logo.png',
        style: {borderRadius: '8px'},
      },
      items: [
        {
          to: '/#features',
          label: 'Features',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/privacy',
          label: 'Privacy',
          position: 'right',
        },
        {
          to: '/terms',
          label: 'Terms',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Product',
          items: [
            {label: 'Features', to: '/#features'},
            {label: 'Documentation', to: '/docs/intro'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacy Policy', to: '/privacy'},
            {label: 'Terms of Use', to: '/terms'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Serverly. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['sql', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
