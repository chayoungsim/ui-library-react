// Header 프로토타입(HeaderTy2, HeaderTy3 등)에서 공통으로 쓰는 5탭 x 5서브 더미 GNB 데이터입니다.
export interface GnbSubItem {
  title: string
  path: string
}

export interface GnbItem {
  title: string
  path: string
  subItems: GnbSubItem[]
}

export const gnbSampleRoutes: GnbItem[] = [
  {
    title: 'Products',
    path: '/products',
    subItems: [
      { title: 'Overview', path: '/products/overview' },
      { title: 'Pricing', path: '/products/pricing' },
      { title: 'Features', path: '/products/features' },
      { title: 'Integrations', path: '/products/integrations' },
      { title: 'Updates', path: '/products/updates' },
    ],
  },
  {
    title: 'Solutions',
    path: '/solutions',
    subItems: [
      { title: 'Enterprise', path: '/solutions/enterprise' },
      { title: 'Startups', path: '/solutions/startups' },
      { title: 'Education', path: '/solutions/education' },
      { title: 'Healthcare', path: '/solutions/healthcare' },
      { title: 'Finance', path: '/solutions/finance' },
    ],
  },
  {
    title: 'Resources',
    path: '/resources',
    subItems: [
      { title: 'Docs', path: '/resources/docs' },
      { title: 'Blog', path: '/resources/blog' },
      { title: 'Guides', path: '/resources/guides' },
      { title: 'API Reference', path: '/resources/api' },
      { title: 'Community', path: '/resources/community' },
    ],
  },
  {
    title: 'Company',
    path: '/company',
    subItems: [
      { title: 'About', path: '/company/about' },
      { title: 'Careers', path: '/company/careers' },
      { title: 'Press', path: '/company/press' },
      { title: 'Partners', path: '/company/partners' },
      { title: 'Contact', path: '/company/contact' },
    ],
  },
  {
    title: 'Support',
    path: '/support',
    subItems: [
      { title: 'Help Center', path: '/support/help-center' },
      { title: 'Status', path: '/support/status' },
      { title: 'Security', path: '/support/security' },
      { title: 'Terms', path: '/support/terms' },
      { title: 'Privacy', path: '/support/privacy' },
    ],
  },
]
