const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tomosuke Blog',
  tagline: '',
  url: 'https://tomokomiyake.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TomokoMiyake', // Usually your GitHub org/user name.
  projectName: 'tomosuke-blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tomosuke Blog',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blog',
          items: [
            {
              label: 'All Posts',
              to: '/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/TomokoMiyake',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tomosuke. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          blogTitle: 'Tomosuke Blog',
          blogDescription: 'Tomosuke blog powered by docusaurus',
          path: './blog',
          routeBasePath: '/',
        },
      },
    ],
  ],
};
