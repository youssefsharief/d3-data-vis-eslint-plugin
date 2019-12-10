/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
'use strict'

module.exports = {
  base: '/',
  title: 'eslint-plugin-d3',
  description: 'ESLint plugin for D3.js',
  serviceWorker: true,
  evergreen: true,
  head: [],

  themeConfig: {
    repo: 'youssefsharief/d3-data-vis-eslint-plugin',
    docsRepo: 'youssefsharief/d3-data-vis-eslint-plugin',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    lastUpdated: true,
    serviceWorker: {
      updatePopup: true
    },

    nav: [
      { text: 'User Guide', link: '/user-guide/' },
      { text: 'Developer Guide', link: '/developer-guide/' },
      { text: 'Rules', link: '/rules/' },
    ],

    sidebar: 'auto'

  }
}
