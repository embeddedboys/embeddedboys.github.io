import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'embeddedboys',
  tagline: 'If you game is creation, you go where the action is.',
  favicon: 'img/embeddedboys-icon.png',

  // Set the production url of your site here
  url: 'http://embeddedboys.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'embeddedboys', // Usually your GitHub org/user name.
  projectName: 'embeddedboys.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: false,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'embeddedboys',
      logo: {
        alt: 'embeddedboys Logo',
        src: 'img/embeddedboys.png',
      },
      items: [
        {to: '/', label: '首页', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '产品中心',
        },
        // {to: '/blog/embeddedboys', label: '关于我们', position: 'left'},
        {
          href: 'http://forum.embeddedboys.com',
          label: '在线论坛',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: '关于我们',
        //   items: [
        //     {
        //       label: '了解embeddedboys',
        //       to: '/blog/embeddedboys.md',
        //     },
        //   ],
        // },
        {
          title: '社区',
          items: [
            {
              label: '官方论坛',
              href: 'http://forum.embeddedboys.com',
            },
          ],
        },
        {
          title: '关注我们',
          items: [
            {
              label: 'BiliBili',
              href: 'https://space.bilibili.com/1380422187',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} embeddedboys, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
