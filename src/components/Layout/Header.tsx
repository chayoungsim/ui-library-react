import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { routes, getChildRoutes } from '../../routes/router.tsx'
import useMediaQuery from '../../hooks/useMediaQuery'
import useTheme from '@/hooks/useTheme'
import Button from '@/components/Button'
import './Header.scss'

// src/styles/abstracts/_breakpoints.scss의 'lg'(1024px)와 동일한 기준입니다.
const DESKTOP_QUERY = '(min-width: 1024px)'

const Header = () => {
  const navItems = getChildRoutes(routes[0]).filter((route) => route.handle?.title)
  const isDesktop = useMediaQuery(DESKTOP_QUERY)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header id="header" className="header">
      <div className="header-content">
        {isDesktop ? (
          // pc
          <nav>
            <ul className="nav-list">
              {navItems.map((route) => {
                const path = route.path ?? '/'

                return (
                  <li key={path ?? route.handle?.title}>
                    <NavLink to={path} end={path === '/'}>
                      {route.handle?.title}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
        ) : (
          // mobile
          <>
            <button
              type="button"
              className={`mo-hm${isOpen ? ' is-open' : ''}`}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="hm-bar"></span>
              <span className="hm-txt">Menu</span>
            </button>
            <div className={`mo-nav${isOpen ? ' is-open' : ''}`}>
              <ul>
                {navItems.map((route) => {
                  const subItems = getChildRoutes(route).filter((child) => child.handle?.title)
                  const hasSubmenu = subItems.length > 0

                  return (
                    <li key={route.path ?? route.handle?.title} className={hasSubmenu ? 'has-submenu' : ''}>
                      <Link to={route.path ?? '/'} onClick={() => setIsOpen(false)}>
                        {route.handle?.title}
                      </Link>
                      {hasSubmenu && (
                        <ul className="mo-nav__submenu">
                          {subItems.map((child) => (
                            <li key={child.path}>
                              <Link to={child.path ?? '/'} onClick={() => setIsOpen(false)}>
                                {child.handle?.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </>
        )}
        <div>
          <Button variant="outline" onClick={toggleTheme} size="sm">
            {theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
