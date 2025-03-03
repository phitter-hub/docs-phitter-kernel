import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "phitter-docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/simulation/queue-simulation/own-distribution' },
      { text: 'nepe', link: '/simulation/api-examples' }
    ],

    sidebar: [
      {
        text: 'Fit',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/fit/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Simulation',
        collapsed: true,
        items: [
          {
            text: 'Queue Simulation',
            collapsed: true,
            items: [
              { text: 'Own Distribution', link: '/simulation/queue-simulation/own-distribution' },
              // { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Create Queue Simulation Instance', link: '/simulation/queue-simulation/create-queue-instance' },
              { text: 'Run Queue Instance', link: '/simulation/queue-simulation/run-queue-simulation' },
              { text: 'Queue Simulation Metrics', link: '/simulation/queue-simulation/queue-metrics' },
              { text: 'Queue Simulation Probabilities', link: '/simulation/queue-simulation/queue-probabilities' },
              { text: 'Confidence Interval for Simulation Metrics', link: '/simulation/queue-simulation/queue-confidence-interval' },
            ]
          },
          {
            text: 'Process Simulation',
            collapsed: true,
            items: [
              // { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Create Instance Simulation', link: '/simulation/process-simulation/create-instance-simulation' },
              { text: 'Create a Process Simulation', link: '/simulation/process-simulation/create-process' },
              { text: 'Graph Process Simulation', link: '/simulation/process-simulation/graph-process' },
              { text: 'Run a Process Simulation', link: '/simulation/process-simulation/run-simulation' },
              { text: 'Simulation Metrics', link: '/simulation/process-simulation/simulation-metrics' },
              { text: 'Confidence Interval of Metrics', link: '/simulation/process-simulation/confidence-interval' },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/phitterio/phitter-kernel' }
    ]
  }
})
