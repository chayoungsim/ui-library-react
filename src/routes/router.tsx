import { createBrowserRouter } from 'react-router-dom'
import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom'

import App from '../App.tsx'
import Notfound from '../pages/error/Notfound.tsx'
import Home from '../pages/main/Home.tsx'
import Docs from '../pages/docs/Docs.tsx'
import Atom from '../pages/atom/Atom.tsx'
import Theme from '../pages/theme/Theme.tsx'
import Layout from '../pages/layout/Layout.tsx'
import Icons from '@/pages/icons/Icons.tsx'

import ButtonPage from '../pages/atom/ButtonPage.tsx'
import InputPage from '../pages/atom/InputPage.tsx'
import RadioPage from '@/pages/atom/RadioPage.tsx'
import CheckboxPage from '@/pages/atom/CheckboxPage.tsx'
import PaginationPage from '@/pages/atom/PaginationPage.tsx'
import SelectPage from '@/pages/atom/SelectPage.tsx'
import TablePage from '@/pages/atom/TablePage.tsx'
import BreadcrumbPage from '@/pages/atom/BreadcrumbPage.tsx'
import ModalPage from '@/pages/atom/ModalPage.tsx'
import TooltipPage from '@/pages/atom/TooltipPage.tsx'
import AccordionPage from '@/pages/atom/AccordionPage.tsx'
import TabsPage from '@/pages/atom/TabsPage.tsx'
import CardPage from '@/pages/atom/CardPage.tsx'
import SwitchPage from '@/pages/atom/SwitchPage.tsx'

import HeaderPage from '@/pages/layout/HeaderPage.tsx'

export type RouteHandle = {
  title: string
}

type AppIndexRoute = Omit<IndexRouteObject, 'handle' | 'children'> & {
  handle?: RouteHandle
}

type AppNonIndexRoute = Omit<NonIndexRouteObject, 'handle' | 'children'> & {
  handle?: RouteHandle
  children?: AppRoute[]
}

export type AppRoute = AppIndexRoute | AppNonIndexRoute

/** index 라우트는 children을 가질 수 없으므로, 유니온을 좁혀 안전하게 children을 꺼냅니다. */
export function getChildRoutes(route: AppRoute): AppRoute[] {
  return 'children' in route ? (route.children ?? []) : []
}

const COMPONENTS_PATH = '/components'
const LAYOUT_PATH = '/layout'

export const routes: AppRoute[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <Notfound />,
    children: [
      {
        index: true,
        handle: { title: 'Home' },
        element: <Home />,
      },
      {
        path: '/docs',
        handle: { title: 'Docs' },
        element: <Docs />,
      },
      {
        path: COMPONENTS_PATH,
        handle: { title: 'Components' },
        // 이 라우트 자체는 element가 없어 Outlet만 렌더링합니다.
        // 그래서 Atom/ButtonPage/InputPage가 겹쳐지지 않고 하나만 단독으로 표시됩니다.
        children: [
          {
            index: true,
            element: <Atom />,
          },
          {
            path: `${COMPONENTS_PATH}/button`,
            handle: { title: 'Button' },
            element: <ButtonPage />,
          },
          {
            path: `${COMPONENTS_PATH}/input`,
            handle: { title: 'Input' },
            element: <InputPage />,
          },
          {
            path: `${COMPONENTS_PATH}/radio`,
            handle: { title: 'Radio' },
            element: <RadioPage />,
          },
          {
            path: `${COMPONENTS_PATH}/checkbox`,
            handle: { title: 'Checkbox' },
            element: <CheckboxPage />,
          },
          {
            path: `${COMPONENTS_PATH}/pagination`,
            handle: { title: 'Pagination' },
            element: <PaginationPage />,
          },
          {
            path: `${COMPONENTS_PATH}/select`,
            handle: { title: 'Select' },
            element: <SelectPage />,
          },
          {
            path: `${COMPONENTS_PATH}/table`,
            handle: { title: 'Table' },
            element: <TablePage />,
          },
          {
            path: `${COMPONENTS_PATH}/breadcrumb`,
            handle: { title: 'Breadcrumb' },
            element: <BreadcrumbPage />,
          },
          {
            path: `${COMPONENTS_PATH}/modal`,
            handle: { title: 'Modal' },
            element: <ModalPage />,
          },
          {
            path: `${COMPONENTS_PATH}/tooltip`,
            handle: { title: 'Tooltip' },
            element: <TooltipPage />,
          },
          {
            path: `${COMPONENTS_PATH}/accordion`,
            handle: { title: 'Accordion' },
            element: <AccordionPage />,
          },
          {
            path: `${COMPONENTS_PATH}/tabs`,
            handle: { title: 'Tabs' },
            element: <TabsPage />,
          },
          {
            path: `${COMPONENTS_PATH}/card`,
            handle: { title: 'Card' },
            element: <CardPage />,
          },
          {
            path: `${COMPONENTS_PATH}/switch`,
            handle: { title: 'Switch' },
            element: <SwitchPage />,
          },
        ],
      },
      {
        path: '/theme',
        handle: { title: 'Theme' },
        element: <Theme />,
      },
      {
        path: '/layout',
        handle: { title: 'Layout' },        
        children: [
          {
            index: true,
            element: <Layout />,
          },
          {
            path: `${LAYOUT_PATH}/header`,
            handle: { title: 'Header' },
            element: <HeaderPage />,
          },
        ],
      },
      {
        path:'/icons',
        handle: { title: 'Icons'},
        element: <Icons />
      }
    ],
  },
]

const router = createBrowserRouter(routes)
export default router
