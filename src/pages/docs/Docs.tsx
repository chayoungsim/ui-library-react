
import usePageTitle from '@/hooks/usePageTitle'
import './Dosc.scss'

const Docs = () => {
  usePageTitle('Docs - ui-library')

  return (
    <div>
      <h2>Docs</h2>

      <div className="sect docs-sect">
          <a href="/data/markup-guide.html" target="_blank" className="doc-card">
              <div className="doc-card__top">
                  <span className="doc-card__badge">CONVENTION</span>
                  <span className="doc-card__fmt">
                    <span>HTML</span>
                    <span>MD</span>
                  </span>
              </div>
              <h3 className="doc-card__title">퍼블리싱 가이드</h3>
              <p className="doc-card__desc">폴더 구조·네이밍·마크업·SCSS·Git까지 작업 컨벤션 전반. 컴포넌트 가이드가 "무엇을", 이 문서가 "어떻게"를 다룹니다. </p>
              <span className="doc-card__go">
                  문서열기       
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>    
              </span>
          </a>
          <a href="/data/accessibility-checklist.html" target="_blank" className="doc-card">
              <div className="doc-card__top">
                  <span className="doc-card__badge">ACCESSIBILITY</span>
                  <span className="doc-card__fmt">
                    <span>HTML</span>
                  </span>
              </div>
              <h3 className="doc-card__title">접근성 체크리스트</h3>
              <p className="doc-card__desc">KWCAG 2.2 검사항목 33개 기반 점검표. 진행률 추적, 필수 항목 필터, 자주 틀리는 것 Top 10, 감리용 전수 인덱스를 포함합니다.</p>
              <span className="doc-card__go">
                  문서열기       
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>    
              </span>
          </a>
          <a href="/data/js-performance-checklist.html" target="_blank" className="doc-card">
              <div className="doc-card__top">
                  <span className="doc-card__badge">PERFORMANCE</span>
                  <span className="doc-card__fmt">
                    <span>HTML</span>
                  </span>
              </div>
              <h3 className="doc-card__title">JS 최적화 체크리스트</h3>
              <p className="doc-card__desc">Core Web Vitals(LCP·INP·CLS) 중심의 성능 점검표. 측정에서 시작해 번들·로딩·서드파티·INP·GSAP까지, 지표별 판단 기준을 제공합니다. </p>
              <span className="doc-card__go">
                  문서열기       
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>    
              </span>
          </a>
      </div>

      
      
      
    </div>
  )
}

export default Docs
