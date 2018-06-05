
export default [
  /*{
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },*/
  {
    path: '/',
    component: () => import('layouts/test'),
    children: [
      { path: '', component: () => import('pages/poc') }
    ]
  },
  {
    path: '/poc1/',
    component: () => import('pages/poc'),
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
