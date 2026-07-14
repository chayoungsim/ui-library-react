import { useEffect, useRef, useState } from 'react'
import styles from './HeaderTy3.module.scss'
import { gnbSampleRoutes } from './gnbSampleRoutes'

// 탭/서브메뉴 사이를 이동할 때 잠깐 벗어나는 순간에 바로 닫히지 않도록 주는 지연 시간입니다.
const CLOSE_DELAY = 200

const HeaderTy3 = () => {
    const [activePath, setActivePath] = useState<string | null>(null)
    const closeTimerRef = useRef<number | undefined>(undefined)

    const handleMouseEnter = (path: string) => {
        window.clearTimeout(closeTimerRef.current)
        setActivePath(path)
    }

    const handleMouseLeave = () => {
        closeTimerRef.current = window.setTimeout(() => setActivePath(null), CLOSE_DELAY)
    }

    useEffect(() => () => window.clearTimeout(closeTimerRef.current), [])

  return (
    <header className={styles.header}>
        <div className={styles.static}>
            <h1>Logo</h1>
            <nav>
                <ul className={styles.gnb}>
                    {gnbSampleRoutes.map((route) => {
                        const isActive = activePath === route.path

                        return (
                            <li
                                key={route.path}
                                className={`${styles.item} ${isActive ? styles['is-active'] : ''}`.trim()}
                                onMouseEnter={() => handleMouseEnter(route.path)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href={route.path}>{route.title}</a>
                                <ul className={styles.submenu}>
                                    {route.subItems.map((sub) => (
                                        <li key={sub.path}>
                                            <a href={sub.path}>{sub.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default HeaderTy3
