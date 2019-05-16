import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/setting',
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'index',
      name: `${pre}index`,
      meta: { ...meta, cache: true, title: '设置首页' },
      component: () => import('@/views/setting/index')
    },
    {
      path: 'setting/system',
      name: `${pre}setting-system`,
      meta: { ...meta, cache: true, title: '系统设置' },
      component: () => import('@/views/setting/setting/system')
    },
    {
      path: 'setting/info',
      name: `${pre}setting-info`,
      meta: { ...meta, cache: true, title: '系统信息' },
      component: () => import('@/views/setting/setting/info')
    },
    {
      path: 'setting/navi',
      name: `${pre}setting-navi`,
      meta: { ...meta, cache: true, title: '前台导航' },
      component: () => import('@/views/setting/setting/navi')
    },
    {
      path: 'payment/config',
      name: `${pre}payment-config`,
      meta: { ...meta, cache: true, title: '支付配置' },
      component: () => import('@/views/setting/payment')
    },
    {
      path: 'logistics/region',
      name: `${pre}logistics-region`,
      meta: { ...meta, cache: true, title: '区域管理' },
      component: () => import('@/views/setting/logistics/region')
    }
  ])('setting-')
}