import { useState } from 'react'
import styles from './HeaderTy1.module.scss';
import { Link } from 'react-router-dom'
import { routes, getChildRoutes } from '@/routes/router'
import Icon from '../Icon/Icon';
import Button from '../Button';
import useMediaQuery from '@/hooks/useMediaQuery'

// src/styles/abstracts/_breakpoints.scss의 'lg'(1024px)와 동일한 기준입니다.
const DESKTOP_QUERY = '(min-width: 1024px)'

const HeaderTy1 = () => {

    const navItems = getChildRoutes(routes[0]).filter((route) => route.handle?.title && route.path)
    const isDesktop = useMediaQuery(DESKTOP_QUERY)
    const [isOpen, setIsOpen] = useState(false)

    const renderNavItems = (onItemClick?: () => void) => (
        <ul className={styles.gnb}>
            {navItems.map((route) => (
                <li key={route.path ?? '/'}>
                    <Link to={route.path ?? '/'} data-trans={route.handle?.title} onClick={onItemClick}>
                        <span>{route.handle?.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )

    return (
        <header className={styles.header}>
            <div className={styles.static}>
                <h1>logo</h1>

                {isDesktop ? (
                    <nav>{renderNavItems()}</nav>
                ) : (
                    <>
                        <button
                            type="button"
                            className={styles.mobileToggle}
                            aria-label="메뉴 열기"
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <Icon text="" className="icon--hamber-bar" />
                        </button>

                        {/* 모바일 메뉴 */}
                        <div className={`${styles.mobileNav} ${isOpen ? styles['is-open'] : ''}`.trim()}>
                            <Button
                                type="button"
                                variant="text"
                                iconOnly
                                aria-label="메뉴 닫기"
                                onClick={() => setIsOpen(false)}
                            >
                                <Icon text="" className="icon--x" />
                            </Button>
                            <nav>{renderNavItems(() => setIsOpen(false))}</nav>
                        </div>
                    </>
                )}
            </div>
        </header>
    )
}

export default HeaderTy1