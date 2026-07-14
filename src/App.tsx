import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Container from './components/Layout/Container'
import useViewportHeight from './hooks/useViewportHeight'
import useTheme from './hooks/useTheme'

function App() {
  // 모바일 브라우저의 100vh 오차를 보정하는 --vh 변수를 전체 페이지에 적용합니다.
  useViewportHeight()
  // 어떤 페이지로 들어오거나 새로고침해도 저장된(또는 시스템) 테마가 즉시 적용되도록 합니다.
  useTheme()

  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  )
}

export default App
