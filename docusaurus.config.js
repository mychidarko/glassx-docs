// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GlassX',
  tagline: 'React state management for humans',
  url: 'https://glassx.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mychidarko', // Usually your GitHub org/user name.
  projectName: 'glassx', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/mychidarko/glassx-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GlassX',
        // logo: {
        //   alt: 'GlassX Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            to: '/docs',
            position: 'right',
            label: 'Docs',
          },
          {
            href: 'https://github.com/mychidarko/glassx',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Basic Usage',
                to: '/docs/usage',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mychidarko/glassx',
              },
              {
                label: 'Leaf Twitter',
                href: 'https://twitter.com/leafphp',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'React JS Modal',
                to: 'https://github.com/mychidarko/react-js-modal',
              },
              {
                label: 'Leaf PHP Framework',
                to: 'https://github.com/leafsphp/leaf',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021-${new Date().getFullYear()} Michael Darko-Duodu.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
