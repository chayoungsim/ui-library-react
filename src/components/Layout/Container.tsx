import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { routes, getChildRoutes } from '../../routes/router.tsx'
import Breadcrumb from '../Breadcrumb'
import './Container.scss'

import useMediaQuery from '../../hooks/useMediaQuery';

const DESKTOP_QUERY = '(min-width: 1024px)'

const Container = () => {
  const location = useLocation()
  const topRoutes = getChildRoutes(routes[0])
  const isDesktop = useMediaQuery(DESKTOP_QUERY)

  const activeRoute = topRoutes.find((route) => {
    if (!route.path) return false
    return location.pathname === route.path || location.pathname.startsWith(`${route.path}/`)
  })

  const subItems = activeRoute
    ? getChildRoutes(activeRoute).filter((child) => child.handle?.title)
    : []
  const hasSubmenu = subItems.length > 0

  if (!hasSubmenu) {
    return (
      <div id="container" className="container container--full">
        <Breadcrumb />
        <Outlet />
      </div>
    )
  }

  return (
    <div id="container" className="container container--with-sidebar">
      {isDesktop ?(
        <aside className="container__sidebar">
          <nav>
            <ul>
              {subItems.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path ?? '#'}>{item.handle?.title}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      ) : ""}
      
      <div className="container__content">
        <Breadcrumb />
        <Outlet />
      </div>
    </div>
  )
}

export default Container
