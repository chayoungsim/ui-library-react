import { useEffect, useRef, useState } from 'react'
import styles from './HeaderTy2.module.scss'
import Icon from '../Icon/Icon'
import { gnbSampleRoutes as routes } from './gnbSampleRoutes'

// 서브메뉴 사이를 이동할 때 gnb 영역을 벗어나는 찰나에 바로 닫히지 않도록 주는 지연 시간입니다.
const CLOSE_DELAY = 200

const HeaderTy2 = () => {
    const [isShow, setIsShow] = useState(false)
    const closeTimerRef = useRef<number | undefined>(undefined)

    const handleMouseEnter = () => {
        window.clearTimeout(closeTimerRef.current)
        setIsShow(true)
    }

    const handleMouseLeave = () => {
        closeTimerRef.current = window.setTimeout(() => setIsShow(false), CLOSE_DELAY)
    }

    useEffect(() => () => window.clearTimeout(closeTimerRef.current), [])

  return (
    <header className={`${styles.header} ${isShow ? styles['is-show'] :""}`.trim()}>
        <div className={styles.static}>
            <h1>Logo</h1>
            <nav>
                <ul
                    className={styles.gnb}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {routes.map((route) => (
                        <li key={route.path}>
                            <a href={route.path}>{route.title}</a>
                            <ul>
                                {route.subItems.map((sub) => (
                                    <li key={sub.path}>
                                        <a href={sub.path}>{sub.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.aside}>
                <Icon text="메뉴오픈" className="icon--hamber-bar" />
            </div>
        </div>
    </header>
  )
}

export default HeaderTy2
