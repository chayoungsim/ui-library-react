import Button from './components/Button'

function App() {
  return (
    <>
      <Button variant="primary" size="md" loading={false} disabled={false}>
        Primary Button
      </Button>
      <Button variant="secondary" size="md" loading={false} disabled={false}>
        Secondary Button
      </Button>
      <Button variant="outline" size="md" loading={false} disabled={false}>
        Outline Button
      </Button>
    </>
  )
}

export default App
