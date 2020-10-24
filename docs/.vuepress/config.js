module.exports = {
    title: '凡夫俗子基础知识学习',
    description: '凡夫俗子基础知识学习',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '个人简介', link: '/me/' },
            { text: 'External', link: 'https://google.com' }
        ],
        sidebar: [
            {
                title: '个人简介', // 必要的
                path: '/me/' // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
                title: 'npm', // 必要的
                path: '/npm/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 4 // 可选的, 默认值是 1
            },
            {
                title: '设计模式', // 必要的
                path: '/DesignPatterns/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 4 // 可选的, 默认值是 1
            },
            {
                title: 'Http', // 必要的
                path: '/Https/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 4 // 可选的, 默认值是 1
            },
            {
                title: '算法与数据结构',
                path: '/algorithm/',
                collapsable: true, // 可选的, 默认值是 true,
                children: [],
                sidebarDepth: 4 // 可选的, 默认值是 1
            },
            {
                title: '自动化测试',
                path: '/test/',
                collapsable: true, // 可选的, 默认值是 true,
                children: [],
                sidebarDepth: 4 // 可选的, 默认值是 1
            }
        ],
        lastUpdated: 'Last Updated'
    }
};
