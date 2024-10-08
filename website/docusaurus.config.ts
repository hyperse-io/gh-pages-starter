import { themes } from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import type * as Plugin from '@docusaurus/types/src/plugin';
import { copyrightConfig } from './copyright.config';

const config: Config = {
  title: 'Docusaurus Mono Repo',
  tagline:
    'A Docusaurus monorepo starter with Yarn Workspaces, and GitHub Actions',
  url: 'https://hyperse.github.io',
  baseUrl: '/docusaurus-mono-starter',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/icon/favicon.ico',
  organizationName: 'Hyperse',
  projectName: 'docusaurus-hyperse',
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/hyperse-io/docusaurus-mono-starter',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/layout.css'),
            require.resolve('./src/css/overrides.css'),
            require.resolve('./src/css/code-blocks.css'),
          ],
        },
        gtag: {
          trackingID: 'GTM-THVM29S',
          anonymizeIP: false,
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    mermaid: {
      // https://mermaid.js.org/config/theming.html
      theme: { light: 'forest', dark: 'neutral' },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: false,
      },
    },
    navbar: {
      title: 'Hyperse',
      hideOnScroll: false,
      logo: {
        alt: 'Hyperse',
        src: 'img/logo.svg',
        style: {
          borderRadius: '2px',
        },
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://www.npmjs.com/package/@hyperse/docusaurus-mono-starter',
          label: 'NPM',
          position: 'right',
        },
        {
          href: 'https://github.com/hyperse-io/docusaurus-mono-starter',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.hyperse.net/community',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://www.hyperse.net/blog',
          label: 'Blog',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'hyperse',
              href: 'https://www.hyperse.net/',
            },
            {
              label: 'hyperse blog',
              href: 'https://www.hyperse.net/blog',
            },
            {
              label: 'hyperse devutils',
              href: 'https://devutils.hyperse.net/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://www.hyperse.net/community',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/hyperse_net',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hyperse-io',
            },
          ],
        },
      ],
      copyright: copyrightConfig,
    },
    algolia: {
      apiKey: '441074cace987cbf4640c039ebed303c',
      appId: 'J0EABTYI1A',
      indexName: 'docusaurus-openapi',
    },
    prism: {
      theme: themes.nightOwlLight,
      darkTheme: themes.nightOwl,
      additionalLanguages: ['docker', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    async function myPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require.resolve('tailwindcss'));
          postcssOptions.plugins.push(require.resolve('autoprefixer'));
          return postcssOptions;
        },
      };
    } satisfies Plugin.PluginModule,
  ],
};

export default async function createConfig() {
  return config;
}
