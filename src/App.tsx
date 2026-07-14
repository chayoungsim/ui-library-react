import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Container from './components/Layout/Container'
import useViewportHeight from './hooks/useViewportHeight'

function App() {
  // 모바일 브라우저의 100vh 오차를 보정하는 --vh 변수를 전체 페이지에 적용합니다.
  useViewportHeight()

  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  )
}

export default App
