import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' 一级路由',
      path: '/route',
      component: './Table',
      routes: [
        {
          name: ' 二级路由1',
          path: '/route/test1',
          component: './Table',
          // 去掉这一行菜单就会正常展示
          wrappers: ['@/wrappers/Wrapper.tsx'],
        },
        {
          name: ' 二级路由2',
          path: '/route/test2',
          component: './Table',
        },
      ],
    },
  ],
  npmClient: 'npm',
});
