export default {
  title: 'simgle-ui',
  base: '/simgle-ui/',
  outDir: './dist',
  lastUpdated: true,
  themeConfig: {
    logo: 'https://gitee.com/monsterwx/uv-ui/raw/master/docs/logo.png',
    search: {
      provider: 'local'
    },
    docsDir: 'docs',
    outline: false, // 大纲
    socialLinks: [
      { icon: 'github', link: 'XXXX' },
      {
        icon: {
          svg: '<svg t="1670828084087" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1923" width="32" height="32"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1924"></path></svg>'
        },
        link: 'XXXX'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Monster'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/button', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickStart' },
            { text: '更新日志', link: '/guide/CHANGELOG' }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          collapsed: false,
          items: [
            { text: 'Button 按钮', link: '/component/button' },
          ]
        },
        {
          text: '表单组件',
          collapsed: false,
          items: [
            { text: 'Input 输入框', link: '/component/input' },

          ]
        },
        {
          text: '反馈组件',
          collapsed: false,
          items: [
            { text: 'ActionSheet 动作面板', link: '/component/actionSheet' },

          ]
        },
        {
          text: '展示组件',
          collapsed: false,
          items: [
            { text: 'Collapse 折叠面板', link: '/component/collapse' },

          ]
        },
        {
          text: '导航组件',
          collapsed: false,
          items: [
            { text: 'Tab 标签页', link: '/component/tab' },
          ]
        },
      ]
    }
  }
}