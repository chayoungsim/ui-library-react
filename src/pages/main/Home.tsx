
import usePageTitle from '@/hooks/usePageTitle'


const Home = () => {
  usePageTitle('Home - ui-library')

  return (
    <div>
      <h2>Preview</h2>
      <section className="roadmap" aria-labelledby="roadmap-title">
        <div className="wrap">
          <div className="roadmap__head">
            <h2 id="roadmap-title">자산 로드맵</h2>
            <span>8 items</span>
          </div>
          <div className="roadmap__list">
            <div className="rm">
              <span className="rm__no">1</span>
              <span className="rm__body"><span className="rm__name">공통 UI 라이브러리</span><span className="rm__note">컴포넌트 가이드로 기준 확립</span></span>
              <span className="rm__status rm__status--wip">진행 중</span>
            </div>
            <div className="rm">
              <span className="rm__no">2</span>
              <span className="rm__body"><span className="rm__name">디자인 시스템</span><span className="rm__note">토큰 2단계 체계 착수</span></span>
              <span className="rm__status rm__status--wip">진행 중</span>
            </div>
            <div className="rm">
              <span className="rm__no">3</span>
              <span className="rm__body"><span className="rm__name">UI 패턴 모음</span><span className="rm__note">GNB·무한스크롤 등 조합 패턴 · patterns.html 예정</span></span>
              <span className="rm__status rm__status--todo">예정</span>
            </div>
            <div className="rm">
              <span className="rm__no">4</span>
              <span className="rm__body"><span className="rm__name">접근성 개선</span><span className="rm__note">KWCAG 2.2 체크리스트 완료</span></span>
              <span className="rm__status rm__status--done">완료</span>
            </div>
            <div className="rm">
              <span className="rm__no">5</span>
              <span className="rm__body"><span className="rm__name">성능 개선</span><span className="rm__note">JS 최적화 체크리스트 완료 · 이미지/폰트 별도 예정</span></span>
              <span className="rm__status rm__status--done">완료</span>
            </div>
            <div className="rm">
              <span className="rm__no">6</span>
              <span className="rm__body"><span className="rm__name">GSAP 모션 라이브러리</span><span className="rm__note">cleanup·matchMedia 패턴 규칙화</span></span>
              <span className="rm__status rm__status--todo">예정</span>
            </div>
            <div className="rm">
              <span className="rm__no">7</span>
              <span className="rm__body"><span className="rm__name">퍼블리싱 가이드</span><span className="rm__note">마크업·네이밍·SCSS 컨벤션 완료</span></span>
              <span className="rm__status rm__status--done">완료</span>
            </div>
            <div className="rm">
              <span className="rm__no">8</span>
              <span className="rm__body"><span className="rm__name">사내 템플릿</span><span className="rm__note">HTML · React · Next 스타터</span></span>
              <span className="rm__status rm__status--todo">예정</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
